import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tourney } from './home.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // teams: Array<Tourney> = [];
  teams = [];
  value = '';
  tourneyName = '';
  tourneyTitle = '';
  disableSubmitButton = false;
  textDisabled = false;
  inText: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // navigateTo(path: string) {
  //   this.router.navigate([path]);
  // }

  tourney() {
    this.tourneyTitle = this.tourneyName;
    this.disableSubmitButton = true;
    this.textDisabled = true;
  }

  clearAll() {
    this.tourneyTitle = null;
    this.disableSubmitButton = false;
    this.textDisabled = false;
    // this.inText = '';
    // only clears textbox on the first click
  }

  addTeams(newTeam: string) {
    if (newTeam) {
      this.teams.push(newTeam);
      console.log('newTeam... ', this.teams);
      const teams = newTeam.split(/[\r\n]+/);
      console.log(teams);
    }
  }

  editSeeds() {
    // edit team names
    this.disableSubmitButton = false;
    this.textDisabled = false;
  }

  winner() {
    // advance winner
  }

}
