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
  winners: string[] = [];
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
    this.teams = [];
    // this.inText = '';
    // only clears textbox on the first click
  }

  addTeams(newTeam: string) {
    if (newTeam) {
      this.teams.push([newTeam]);
      console.log("newTeam is", this.teams);
      this.teams = newTeam.split(/[\r\n]+/, 8);
      console.log("team is ", this.teams);
    }
  }

  removeTeams(index: number) {
    this.teams.splice(index, 1);
    console.log("team is", this.teams);
  }

  editSeeds() {
    // edit team names
    this.disableSubmitButton = false;
    this.textDisabled = false;
  }

  random() {
    this.teams.sort((a, b) => 0.5 - Math.random());
  }

  winner(round: number, game: number, winner: string) {
    this.winners['round' + round + '-' + game] = winner;
  }

  getWinnerName(round: number, game: number) {
    let name = this.winners['round' + round + '-' + game];
    return (name !== undefined) ? name : '';
  }

  getTeamName(index: number) {
    return (this.teams.length >= index) ? this.teams[index] : '';
  }
}
