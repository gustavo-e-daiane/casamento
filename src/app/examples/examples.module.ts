import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LandingComponent } from "./landing/landing.component";
import { ProfileComponent } from "./profile/profile.component";
import { PadrinhosComponent } from "./padrinhos/padrinhos.component";
import { SignupComponent } from "./signup/signup.component";
import {
  NgbdModalComponent,
  NgbdModalContent,
} from "../components/modal/modal.component";
@NgModule({
  imports: [CommonModule, FormsModule, NgbModule],
  declarations: [
    LandingComponent,
    SignupComponent,
    PadrinhosComponent,
    ProfileComponent,
    NgbdModalComponent,
    NgbdModalContent,
  ],
})
export class ExamplesModule {}
