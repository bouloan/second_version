import { Component, Input, OnInit } from "@angular/core";
import { ModalService } from "src/app/shared/services/modal.service";
import { ResponsiveService } from "src/app/shared/services/responsive.service";
import { NewsCarouselComponent } from "../news-carousel/news-carousel.component";
import { News } from "../news.model";

@Component({
  selector: "mcna-news-thumbnails",
  templateUrl: "./news-thumbnails.component.html",
  styleUrls: ["./news-thumbnails.component.scss"],
})
export class NewsThumbnailsComponent implements OnInit {
  @Input() news: News;

  public deviceFormat: string;

  constructor(
    private _responsiveService: ResponsiveService,
    private _modalService: ModalService
  ) {}

  ngOnInit(): void {
    this._responsiveService.formatStatus.subscribe(
      (f) => (this.deviceFormat = f)
    );
  }

  onOpenModal() {
    this._modalService.setModalStatus(true);
    this._modalService.setModalContent(NewsCarouselComponent, this.news);
  }
}
