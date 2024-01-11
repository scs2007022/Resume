import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Resume';
  items1=[
    {
      header:'First row',
      date:'2024-01-11',
      idens:[
        "iden 1",
        "iden 2"
      ]
    },
    {
      header:'Second row',
      date:'2024-01-12'
    },
  ]
  items2=[
    {
      header:'First row',
      date:'2024-01-11'
    },
    {
      header:'Second row',
      date:'2024-01-12'
    },
  ]
}
