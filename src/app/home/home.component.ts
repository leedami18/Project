import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tourney } from './home.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  teamName: Array<Tourney> = [];
  tourneyName = '';
  tourneyTitle = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  tourney() {
    this.tourneyTitle = this.tourneyName;
  }

  clearAll() {
    this.tourneyTitle = null;
  }

  teamNames() {
    // this.teamName = this.teamName.split(/[\r\n]+/);
  }

  editSeeds() {
    // edit team names
  }
}
