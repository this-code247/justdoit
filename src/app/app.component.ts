import { Component} from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private mapService: MapService) { }

  changeLocation(country) {
   this.mapService.ChangeCenter(country);
  }

}
