import { isPlatformBrowser } from "@angular/common";
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { LanguagesService } from "./core/language/languages.service";
import { ModalComponent } from "./shared/components/modal/modal.component";
import { DynamicComponentService } from "./shared/services/dynamic-component.service";
import { ModalService } from "./shared/services/modal.service";
import { ResponsiveService } from "./shared/services/responsive.service";

@Component({
  selector: "mcna-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  @ViewChild("modalHost", { read: ViewContainerRef })
  modalHost: ViewContainerRef;

  public title = "mcnaSecondVersion";

  constructor(
    private _modalService: ModalService,
    @Inject(PLATFORM_ID) private _platformId,
    private _languagesService: LanguagesService,
    private _responsiveService: ResponsiveService,
    private _dynamicComponentService: DynamicComponentService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this._platformId)) {
      this._languagesService.setLanguage();
      //get information the device width and initiate deviceFormat parameter
      this._responsiveService.setFormat();
    }

    this._modalService.getModalStatus().subscribe((status) => {
      if (status === true) {
        this.showModal();
      }
    });
  }

  public showModal() {
    this._dynamicComponentService.addComponent(ModalComponent, this.modalHost);
  }

  @HostListener("window:resize")
  onResize() {
    this._responsiveService.setFormat();
  }
}
