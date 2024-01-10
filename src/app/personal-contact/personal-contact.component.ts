import { Component } from '@angular/core';
import * as data from '../../assets/data/personal_information.json';
@Component({
  selector: 'app-personal-contact',
  templateUrl: './personal-contact.component.html',
  styleUrls: ['./personal-contact.component.scss']
})
export class PersonalContactComponent {
  personal_information = data
}
