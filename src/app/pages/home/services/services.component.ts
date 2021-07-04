import {Component, OnDestroy, OnInit} from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Service } from "src/app/shared/models/service.model";

@Component({
  selector: "mcna-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit, OnDestroy {
  public services: Service[];

  private _unsubscribe$: Subject<void>;

  constructor(private _translateService: TranslateService) {}

  ngOnInit() {
    this._unsubscribe$ = new Subject();
    this.setServices();
  }

  setServices() {
    this._translateService
      .stream("services.content")
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((t) => {
        this.services = [];
        t.map((service) => this.services.push(service));
      });
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
