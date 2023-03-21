import { Injectable } from '@angular/core';
import {LightBulb} from "../../types/LightBulb";

@Injectable({
  providedIn: 'root'
})
export class LightStateService {

  lightBulbs: LightBulb[] = [];
  id: number = 0;
  constructor() { }

  addLightBulb(): void {
    this.lightBulbs.push({id: this.id, state: false});
    this.id++;
  }

  getLampStateById(id: number): boolean {
    let bulbFiltered = this.lightBulbs.filter(bulb => bulb.id === id);
    if (bulbFiltered.length === 1) {
      return bulbFiltered[0].state;
    }
    return false;
  }

  setLampStateById(id: number, state: boolean): void {
    let bulbFiltered = this.lightBulbs.filter(bulb => bulb.id === id);
    if (bulbFiltered.length === 1) {
        bulbFiltered[0].state = state;
    }
  }
}
