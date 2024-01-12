import { Component } from '@angular/core';
import { SectionComponent } from '../section.component';
import * as educationHistory from 'src/assets/data/education_history.json';
@Component({
  selector: 'app-education-history',
  templateUrl: '../section.component.html',
  styleUrls: ['./education-history.component.scss']
})
export class EducationHistoryComponent extends SectionComponent{
  override sectionHeader: string="Education History"
}
