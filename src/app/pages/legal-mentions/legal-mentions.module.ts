import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LegalMentionsComponent } from "./legal-mentions.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LegalMentionsComponent],
  imports: [CommonModule, RouterModule],
  exports: [LegalMentionsComponent],
})
export class LegalMentionsModule {}
