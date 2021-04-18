import { Injectable, Type } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  private _modalContent = new BehaviorSubject<{
    component: Type<any>;
    componentContent: any;
  }>(null);
  private _modalIsOpen = new BehaviorSubject<boolean>(false);

  constructor() {}

  public setModalContent(component: Type<any>, componentContent: any) {
    this._modalContent.next({ component, componentContent });
  }

  public getModalContent() {
    return this._modalContent;
  }

  public setModalStatus(status: boolean) {
    this._modalIsOpen.next(status);
  }

  public getModalStatus() {
    return this._modalIsOpen;
  }
}
