import {
  Component,
  Input,
  OnInit,
  HostListener,
  ViewChild, OnDestroy,
} from '@angular/core';
import { VideoService } from "../video.service";
import { YouTubePlayer } from "@angular/youtube-player";
import { ResponsiveService } from "src/app/shared/services/responsive.service";

@Component({
  selector: "mcna-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {
  @Input() videoId: string;
  videoWidth: number;
  videoHeight: number;

  videoIsStop: boolean;
  @ViewChild("video", { static: true }) video: YouTubePlayer;

  constructor(public videoService: VideoService) {}

  ngOnInit() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this.setVideoSize(window.innerWidth);

    this.videoService.getvideoState().subscribe((s) => {
      this.videoIsStop = s;
      if (this.video.getPlayerState() !== -1) {
        this.video.stopVideo();
      }
    });
  }

  @HostListener("window:resize", ["$event"])
  public onResize(event) {
    this.setVideoSize(event.target.innerWidth);
  }

  setVideoSize(width: number) {
    if (width < 551) {
      this.videoWidth = width;
      this.videoHeight = 250;
    } else if (width < 992) {
      this.videoWidth = width / 1.5;
      this.videoHeight = 300;
    } else {
      this.videoWidth = width / 3;
      this.videoHeight = 450;
    }
  }
}
