import {Component, OnDestroy, OnInit} from '@angular/core';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { TranslateService } from "@ngx-translate/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { VideoService } from "./video.service";

@Component({
  selector: "mcna-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.scss"],
})
export class VideosComponent implements OnInit, OnDestroy {
  private _unsubscribe$: Subject<void>;

  public faAngleLeft = faAngleLeft;
  public faAngleRight = faAngleRight;
  public selectedSlide: number;
  public videoState: boolean;
  public slides;

  constructor(
    public videoService: VideoService,
    private _translateService: TranslateService
  ) {}

  ngOnInit() {
    this._unsubscribe$ = new Subject();
    this.setSlides();
    this.videoService.getvideoState().subscribe((s) => {
      this.videoState = s;
    });

    this.selectedSlide = 1;
    setInterval(() => {
      this.onNext();
    }, 2000000);
  }

  setSlides() {
    this._translateService
      .stream("videos.content")
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((t) => {
        this.slides = [
          {
            id: 1,
            title: t[0].subtitle,
            content: t[0].description,
            video: "uqn793_LtmY",
          },
          {
            id: 2,
            title: t[1].subtitle,
            content: t[1].description,
            video: "C0Yc-13P6O4",
          },
          {
            id: 3,
            title: t[2].subtitle,
            content: t[2].description,
            video: "MCTohyeDRow",
          },
          {
            id: 4,
            title: t[3].subtitle,
            content: t[3].description,
            video: "gpbwqwLVxrs",
          },
          {
            id: 5,
            title: t[4].subtitle,
            content: t[4].description,
            video: "zfzUNzFpMCI",
          },
          {
            id: 6,
            title: t[5].subtitle,
            content: t[5].description,
            video: "8nXncc_Yg0g",
          },
        ];
      });
  }

  onNext() {
    this.videoService.setVideoState(true);
    if (this.selectedSlide < this.slides.length) {
      this.selectedSlide++;
    } else {
      this.selectedSlide = 1;
    }
  }
  onPrev() {
    this.videoService.setVideoState(true);
    if (this.selectedSlide > 1) {
      this.selectedSlide--;
    } else {
      this.selectedSlide = this.slides.length;
    }
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
