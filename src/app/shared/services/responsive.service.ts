import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: "root",
})
export class ResponsiveService {
  private _deviceFormat: BehaviorSubject<string> = new BehaviorSubject(null);

  get formatStatus(): BehaviorSubject<string> {
    return this._deviceFormat;
  }

  public setFormat() {
    const width: number = window.innerWidth;
    if (width <= 501) {
      return this._deviceFormat.next("sm");
    } else if (width > 501 && width <= 992) {
      return this._deviceFormat.next("md");
    } else if (width > 992 && width <= 1300) {
      return this._deviceFormat.next("lg");
    } else {
      return this._deviceFormat.next("xl");
    }
  }
}
