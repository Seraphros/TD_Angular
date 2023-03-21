import {Component, Input} from '@angular/core';
import {LightStateService} from "../../services/lightStateService/light-state-service.service";

@Component({
  selector: 'light-bulb-td',
  templateUrl: './light-bulb-td.component.html',
  styleUrls: ['./light-bulb-td.component.css']
})
export class LightBulbTDComponent {

  @Input("id")
  id: number = 0;

  constructor(private service: LightStateService) {
  }

  getLampState() {
    if (this.service.getLampStateById(this.id)) {
      return "on";
    } else {
      return "off";
    }
  }

  setLampState() {
    this.service.setLampStateById(this.id, !this.service.getLampStateById(this.id));
  }
}
