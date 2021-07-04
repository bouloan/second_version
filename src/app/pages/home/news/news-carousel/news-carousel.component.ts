import { Component, Input, OnInit } from "@angular/core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { News } from "../news.model";

@Component({
  selector: "mcna-news-carousel",
  templateUrl: "./news-carousel.component.html",
  styleUrls: ["./news-carousel.component.scss"],
})
export class NewsCarouselComponent {
  @Input() content: News;

  public faAngleLeft = faAngleLeft;

  public faAngleRight = faAngleRight;

  public selectedSlide = 1;

  onNext() {
    if (this.selectedSlide < this.content.images.length) {
      this.selectedSlide++;
    } else {
      this.selectedSlide = 1;
    }
  }
  onPrev() {
    if (this.selectedSlide > 1) {
      this.selectedSlide--;
    } else {
      this.selectedSlide = this.content.images.length;
    }
  }
}
