import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import {
  NgbdModalContent,
} from "../components/modal/modal.component";
import { LandingComponent } from "./landing/landing.component";
import { PadrinhosComponent } from "./padrinhos/padrinhos.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignupComponent } from "./signup/signup.component";
import { CardComponent } from "app/components/card/card.component";
@NgModule({
  imports: [CommonModule, FormsModule, NgbModule],
  declarations: [
    LandingComponent,
    SignupComponent,
    PadrinhosComponent,
    ProfileComponent,
    NgbdModalContent,
    CardComponent,
  ],
})
export class ExamplesModule {}
