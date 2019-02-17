import { Injectable, OnDestroy } from '@angular/core';
import { MyPoint } from './interfaces/my-point';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService implements OnDestroy {

  center: MyPoint = {
    latitude : 32.109333,
    longitude: 34.855499
  };

  users: MyUser[] = [];
  subscriber_users: Subscription;

  constructor(private http: HttpClient) {
    this.subscriber_users = this.http.get('https://glacial-escarpment-40412.herokuapp.com/users')
      .subscribe(value => {
         this.users = value as MyUser[];
         this.sortByCenter();
      });
  }

  ChangeCenter(country): void {
    this.center.latitude = country.latitude;
    this.center.longitude = country.longitude;
    this.sortByCenter();
  }

  sortByCenter(): void {
    this.users.sort((a, b) =>  this.distanceBetweenUserToCenter(a) - this.distanceBetweenUserToCenter(b));
  }

  distanceBetweenUserToCenter(user: MyUser) {

    const deg2rad = (deg) => deg * (Math.PI / 180);

      const R = 6371; // Radius of the earth in km
      const dLat = deg2rad(+user.location.latitude - this.center.latitude);
      const dLon = deg2rad(+user.location.longitude - this.center.longitude);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(this.center.latitude)) *
        Math.cos(deg2rad(+user.location.latitude)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const d = R * c; // Distance in km
      return d;

  }

  ngOnDestroy(): void {
    if (this.subscriber_users) this.subscriber_users.unsubscribe();
  }
}
