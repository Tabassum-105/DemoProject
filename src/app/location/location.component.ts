import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  ngOnInit() {
    // Redirect to the external URL
   // window.location.href = 'https://snazzymaps.com/style/116734/sg-test-exercise';
  }
}
