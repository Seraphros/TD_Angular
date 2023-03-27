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

  removeLightBulb(): void {
    this.lightBulbs.pop();
  }
  getNumberOfBulbs(): number {
    return this.lightBulbs.length;
  }

  setNumberOfBulbsWithMemory(value: number): void {
    let oldValue = this.getNumberOfBulbs();

    while (oldValue !== value) {
      if (oldValue < value) {
        this.addLightBulb();
        oldValue++;
      } else {
        this.removeLightBulb();
        oldValue--;
      }
    }
  }

  setAllStateOfBulb(state: boolean) {
    this.lightBulbs.forEach(bulb => {
      bulb.state = state;
    });
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
