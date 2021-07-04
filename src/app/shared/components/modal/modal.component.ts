import {
  AfterViewInit,
  Component,
  EventEmitter, OnInit,
  Output,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponentService } from "../../services/dynamic-component.service";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: "mcna-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit, AfterViewInit {

  @Output() close = new EventEmitter<void>();

  @ViewChild("modalContentHost", { read: ViewContainerRef })
  modalContentHost: ViewContainerRef;
  component: { component: Type<any>; componentContent: any };

  constructor(
    private _dynamicComponentService: DynamicComponentService,
    private _modalService: ModalService
  ) {}

  ngOnInit() {
    this._modalService.getModalContent().subscribe((component) => {
      this.component = component;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.addModalContent();
    });
  }

  addModalContent() {
    this._dynamicComponentService.addComponent(
      this.component.component,
      this.modalContentHost,
      this.component.componentContent
    );
  }

  onClose() {
    this._dynamicComponentService.removeComponents();
  }
}
