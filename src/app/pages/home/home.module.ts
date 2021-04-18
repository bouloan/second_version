import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TranslateModule } from "@ngx-translate/core";
import { LayoutModule } from "src/app/layout/layout.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ActivitiesComponent } from "./activities/activities.component";
import { ActivityComponent } from "./activities/activity/activity.component";
import { CatchphraseComponent } from "./catchphrase/catchphrase.component";
import { HomeComponent } from "./home.page";
import { NewsCarouselComponent } from "./news/news-carousel/news-carousel.component";
import { NewsThumbnailsComponent } from "./news/news-thumbnails/news-thumbnails.component";
import { NewsComponent } from "./news/news.component";
import { PresentationComponent } from "./presentation/presentation.component";
import { ServiceComponent } from "./services/service/service.component";
import { ServicesComponent } from "./services/services.component";
import { VideoComponent } from "./videos/video/video.component";
import { VideosComponent } from "./videos/videos.component";

@NgModule({
  declarations: [
    HomeComponent,
    CatchphraseComponent,
    PresentationComponent,
    ServicesComponent,
    ServiceComponent,
    VideosComponent,
    VideoComponent,
    ActivitiesComponent,
    ActivityComponent,
    NewsComponent,
    NewsThumbnailsComponent,
    NewsCarouselComponent,
  ],
  imports: [
    RouterModule,
    FontAwesomeModule,
    CommonModule,
    SharedModule,
    LayoutModule,
    YouTubePlayerModule,
    TranslateModule.forChild(),
  ],
  exports: [
    HomeComponent,
    CatchphraseComponent,
    PresentationComponent,
    ServicesComponent,
    ServiceComponent,
    VideosComponent,
    VideoComponent,
    YouTubePlayerModule,
  ],
  entryComponents: [],
})
export class HomeModule {}
