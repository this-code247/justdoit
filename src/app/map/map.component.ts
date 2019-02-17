import { Component } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  constructor(public mapService: MapService) { }

  onChoseLocation(event) {
    this.mapService.ChangeCenter({
      latitude: event.coords.lat,
      longitude: event.coords.lng
    });
  }
}
