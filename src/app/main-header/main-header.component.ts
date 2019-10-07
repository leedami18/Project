import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  firstName: string;
  lastName: string;

  constructor() {
    this.firstName = 'Damian';
    this.lastName = 'Lee';
  }

  showGreeting() {
    const row2 = document.getElementById('r1c2');
    row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
  }

  resetGreeting() {
    const row2 = document.getElementById('r1c2');
    row2.innerHTML = 'r1c2';

  }

  ngOnInit() {
  }

}
