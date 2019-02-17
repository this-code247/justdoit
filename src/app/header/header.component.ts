import { Component } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  appName = 'GMApp';

  countries = [
  {
    name: 'Australia',
    latitude: -19.920825,
    longitude: 134.147901

  },

  {
    name: 'Israel',
    latitude: 32.109333,
    longitude: 34.855499
  },

  {
    name: 'United States',
    latitude: 46.919288,
    longitude: -108.825409
  },

  {
    name: 'France',
    latitude: 48.864716,
    longitude: 2.349014
  },

  {
    name: 'Japan',
    latitude: 36.000000,
    longitude: 137.000000
  }
  ];


  constructor(private mapService: MapService) { }

  onCountryChosen(country) {
    this.mapService.ChangeCenter(country);
  }

}
