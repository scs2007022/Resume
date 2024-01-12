import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  sectionHeader='Section Header'
  sectionDescription='Section Description'
  items = [
    {
      date:'2024/01/01',
      header:'Item Header',
      idens:[
        'iden 1',
        'iden 2'
      ]
    }
  ]
}
