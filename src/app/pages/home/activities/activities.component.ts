import {Component, OnDestroy, OnInit} from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Activity } from "src/app/shared/models/activity.model";

@Component({
  selector: "mcna-activities",
  templateUrl: "./activities.component.html",
  styleUrls: ["./activities.component.scss"],
})
export class ActivitiesComponent implements OnInit, OnDestroy {
  private _unsubscribe$: Subject<void>;

  public activities: Activity[];

  constructor(private _translateService: TranslateService) {}

  ngOnInit() {
    this._unsubscribe$ = new Subject();
    this.setActivities();
  }

  setActivities() {
    this._translateService
      .stream("activities.content")
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((t) => {
        this.activities = [];
        t.map((activity) => this.activities.push(activity));
      });
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
