import { CoursesService } from "./courses.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { SignupFormComponent } from "./signup-form/signup-form/signup-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, CoursesComponent, SignupFormComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
