import { Component, Input, OnInit } from "@angular/core";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Activity } from "src/app/shared/models/activity.model";

@Component({
  selector: "mcna-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.scss"],
})
export class ActivityComponent {
  public faAngleUp = faAngleUp;

  public faAngleDown = faAngleDown;

  public showActivityDescription = false;

  @Input() activity: Activity;

  constructor() {}

}
