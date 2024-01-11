import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalContactComponent } from './personal-contact/personal-contact.component';
import { MatIconModule } from '@angular/material/icon';
import { SectionComponent } from './section/section.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonalContactComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
