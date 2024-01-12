import { Component } from '@angular/core';
import { SectionComponent } from '../section.component';
import educationHistory from 'src/assets/data/education_history.json';
@Component({
  selector: 'app-education-history',
  templateUrl: '../section.component.html',
  styleUrls: [
    '../section.component.scss',
    './education-history.component.scss'
  ]
})
export class EducationHistoryComponent extends SectionComponent{
  override sectionHeader: string="Education History"
  override sectionDescription: string="";
  override items: { date: string; header: string; idens: string[]; }[]=educationHistory;
}
