import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() newItemEvent = new EventEmitter<number>();
  onClickMenu(linkNum: number){
    this.newItemEvent.emit(linkNum);
  }
}
