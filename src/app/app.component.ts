import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demorestaurant';
  currentSection: number = 1;
  addMenuItem(activeMenuNum: number){
    this.currentSection = activeMenuNum;
  }
}
