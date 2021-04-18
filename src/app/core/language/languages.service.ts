import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class LanguagesService {
  constructor(private _translate: TranslateService) {}

  get language() {
    return localStorage.getItem("lang");
  }

  storeLanguage(lang) {
    localStorage.setItem("lang", lang);
    this._translate.use(lang);
  }

  setLanguage() {
    let language: string = localStorage.getItem("lang");
    if (!language) {
      let browserLang: string = this._translate.getBrowserLang();
      if (browserLang !== "zh-CN") {
        browserLang = "fr";
      }
      this.storeLanguage(browserLang);
      //localStorage.setItem("lang", browserLang);
      language = this.language;
      //language = localStorage.getItem("lang");
    }
    this._translate.use(language);
  }
}
