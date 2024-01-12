import { Component } from '@angular/core';
import { SectionComponent } from '../section.component';
import personalInformation from 'src/assets/data/personal_information.json';
@Component({
  selector: 'app-profile',
  templateUrl: '../section.component.html',
  styleUrls: [
    '../section.component.scss',
    './profile.component.scss'
  ]
})
export class ProfileComponent extends SectionComponent{
  override sectionHeader: string="Profile";
  override sectionDescription: string=personalInformation.profile;
  override items: { date: string; header: string; idens: string[]; }[]=[];
}
