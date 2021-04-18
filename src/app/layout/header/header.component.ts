import { isPlatformBrowser } from "@angular/common";
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { LanguagesService } from "@core/language/languages.service";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: "mcna-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public showMenu = false;

  public page: string;

  public subscription: Subscription;

  public language: string;

  public bodyClass: string;

  constructor(
    private _router: Router,
    @Inject(PLATFORM_ID) private _platformId,
    private _languagesService: LanguagesService
  ) {}

  ngOnInit() {
    this.subscription = this._router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.page = e.url;
      });

    if (isPlatformBrowser(this._platformId)) {
      this.language = this._languagesService.language;
      this.fontFamily = this.language;
    }
  }

  onCloseMobileMenu() {
    this.showMenu = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelectLanguage(language: string) {
    this.language = language;
    this._languagesService.storeLanguage(language);
    this.onCloseMobileMenu();
    this.fontFamily = language;
  }

  set fontFamily(language: string) {
    let bodyElement = document.body;
    const className = `${language}-language`;
    bodyElement = this.removeFontFamilyClass(bodyElement);
    bodyElement.classList.add(className);
  }

  removeFontFamilyClass(element: HTMLElement): HTMLElement {
    let currentClass = element.className
      .split(" ")
      .find((r) => r.includes("language"));
    if (currentClass) {
      element.classList.remove(currentClass);
    }
    return element;
  }
}
