import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "mcna-sharped-button",
  templateUrl: "./sharped-button.component.html",
  styleUrls: ["./sharped-button.component.scss"],
})
export class SharpedButtonComponent {
  @Input() backgroundColor;
  @Input() color;
  @Output() buttonClick = new EventEmitter();

  @ViewChild("button") buttonEl: ElementRef;

  onClick() {
    this.buttonClick.emit();
    this.buttonEl;
  }

  getStyles() {
    let styles = {
      "background-color": this.backgroundColor,
      color: this.color,
    };
    return styles;
  }
}
