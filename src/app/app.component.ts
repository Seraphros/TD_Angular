import {Component, OnInit} from '@angular/core';
import {LightStateService} from "./services/lightStateService/light-state-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'monappli';

  constructor(public service: LightStateService) {
  }

  ngOnInit() {
    this.service.addLightBulb();
    this.service.addLightBulb();
  }
}
