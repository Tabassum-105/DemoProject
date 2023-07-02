import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  animations: [
    trigger('rowAnimation', [
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(100%)'
      })),
      transition('hidden => visible', animate('1000ms ease-in')),
    ])
  ]
})
export class CommunityComponent implements OnInit{
  rowState: string[] = ['hidden', 'hidden', 'hidden'];

  ngOnInit() {
    this.animateRows();
  }

  animateRows() {
    setTimeout(() => {
      this.rowState[0] = 'visible';
    }, 500);

    setTimeout(() => {
      this.rowState[1] = 'visible';
    }, 1000);

    setTimeout(() => {
      this.rowState[2] = 'visible';
    }, 1500);
  }
}
