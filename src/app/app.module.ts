import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalContactComponent } from './personal-contact/personal-contact.component';
import { MatIconModule } from '@angular/material/icon';
import { SectionComponent } from './section/section.component';
import { EducationHistoryComponent } from './section/education-history/education-history.component';
import { ProfileComponent } from './section/profile/profile.component';
import { EmploymentHistoryComponent } from './section/employment-history/employment-history.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonalContactComponent,
    SectionComponent,
    EducationHistoryComponent,
    ProfileComponent,
    EmploymentHistoryComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
