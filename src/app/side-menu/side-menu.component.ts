import { Component } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  constructor(public mapService: MapService) { }

}
