import { Component, OnDestroy, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { News } from "./news.model";

@Component({
  selector: "mcna-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit, OnDestroy {
  private _unsubscribe$: Subject<void>;

  public news: News[];

  constructor(private _translateService: TranslateService) {}

  ngOnInit(): void {
    this._unsubscribe$ = new Subject();
    this.setNews();
  }

  setNews() {
    this._translateService
      .stream("news.newsContent")
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((translatedNews) => {
        this.news = [];
        let news: News;
        translatedNews.map((n, i) => {
          news = n;
          news.id = i;
          this.news.push(news);
        });
      });
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
