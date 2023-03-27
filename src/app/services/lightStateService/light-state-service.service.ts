import { Injectable } from '@angular/core';
import {LightBulb} from "../../types/LightBulb";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LightStateService {

  API_URL: string = "http://localhost:8080/";
  BULB_PATH: string = "bulb";
  BULB_BY_ID_PATH: string = "bulbById";
  ALL_BULB_PATH: string = "allBulbs";

  lightBulbs: LightBulb[] = [];
  id: number = 0;
  constructor(private http: HttpClient) { }

  getHelloWorld(): Observable<string> {
    return this.http.get("http://localhost:8080/hello-world", {responseType: "text"});
  }

  getAllLightBulbs(): Observable<LightBulb[]> {
    return this.http.get<LightBulb[]>(this.API_URL+ this.BULB_PATH);
  }

  updateLightBulb() {
    this.getAllLightBulbs().subscribe((data: LightBulb[]) => {
      this.lightBulbs = data;
    });
  }

  addLightBulb(): void {
    this.http.post(this.API_URL + this.BULB_PATH, {}).subscribe(() => {
      this.updateLightBulb();
    });
  }

  removeLightBulb(): void {
    this.http.delete(this.API_URL + this.BULB_PATH, {}).subscribe(() => {
      this.updateLightBulb();
    });
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
    this.http.patch(this.API_URL + this.ALL_BULB_PATH + "?state=" + state, {})
      .subscribe(() => {
        this.updateLightBulb();
      })
  }

  getLampStateById(id: number): boolean {
    let bulbFiltered = this.lightBulbs.filter(bulb => bulb.id === id);
    if (bulbFiltered.length === 1) {
      return bulbFiltered[0].state;
    }
    return false;
  }

  getLampById(id: number): Observable<LightBulb> {
    return this.http.get<LightBulb>(this.API_URL + this.BULB_BY_ID_PATH + "?id=" + id);
  }



  setLampStateById(id: number, state: boolean): void {
    this.http.patch<null>(this.API_URL + this.BULB_PATH + "?id=" + id, {})
      .subscribe(() => {
        this.updateLightBulb();
      })
  }
}
