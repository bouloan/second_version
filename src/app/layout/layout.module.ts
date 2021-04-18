import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [BrowserModule, RouterModule, TranslateModule.forChild()],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
