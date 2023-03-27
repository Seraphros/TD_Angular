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

  changeInput(event: any) {
    if (event.target?.validity?.valid === false) return;

    let value = event.target?.valueAsNumber;
    this.service.setNumberOfBulbsWithMemory(value);
  }
  ngOnInit() {
    this.service.addLightBulb();
  }
}
