import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() sectionHeader!:String;
  @Input() sectionDescription?:String;
  @Input() items?:any[]
}
