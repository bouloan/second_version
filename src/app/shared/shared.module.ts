import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TranslateModule } from "@ngx-translate/core";
import { CloseComponent } from "./components/buttons/close/close.component";
import { SharpedButtonComponent } from "./components/buttons/sharped-button/sharped-button.component";
import { ModalComponent } from "./components/modal/modal.component";

@NgModule({
  declarations: [ModalComponent, SharpedButtonComponent, CloseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    TranslateModule.forChild(),
  ],
  exports: [ModalComponent, SharpedButtonComponent, CloseComponent],
  providers: [],
})
export class SharedModule {}
