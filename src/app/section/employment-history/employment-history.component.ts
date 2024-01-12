import { Component } from '@angular/core';
import { SectionComponent } from '../section.component';
import employmentHistory from 'src/assets/data/employment_history.json';

@Component({
  selector: 'app-employment-history',
  templateUrl: '../section.component.html',
  styleUrls: [
    '../section.component.scss',
    './employment-history.component.scss'
  ]
})
export class EmploymentHistoryComponent extends SectionComponent{
  override sectionHeader: string="Employment History"
  override sectionDescription: string="";
  override items: { date: string; header: string; idens: string[]; }[]=employmentHistory;
}
