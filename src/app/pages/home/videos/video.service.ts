import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class VideoService {
  constructor() {}

  private videoIsStop = new BehaviorSubject<boolean>(false);

  getvideoState() {
    return this.videoIsStop;
  }

  setVideoState(state: boolean) {
    this.videoIsStop.next(state);
  }
}
