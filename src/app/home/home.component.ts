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
  teamTitle = '';
  tourneyTitle = '';
  teamN = '';
  disableSubmitButton = false;
  textDisabled = false;
  inText: string;
  teamName: string;
  teamNames: string[] = [];
  winners: string[] = [];

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
    this.teamNames = [];
    this.winners = [];
    this.teams = [];
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

  onTeamNamesChanged() {
    this.teamNames = this.teamName.split(',');
    this.teamTitle = this.teamN;
  }

  getTeamName(index: number) {
    return (this.teamNames.length >= index) ? this.teamNames[index] : '';
  }

  winner(round: number, game: number, winner: string) {
    this.winners['round' + round + '-' + game] = winner;
  }

  getWinnerName(round: number, game: number) {
    const name = this.winners['round' + round + '-' + game];
    return (name !== undefined) ? name : '';
  }

  random() {
    this.teamNames.sort((a, b) => 0.5 - Math.random());
  }

  removeTeams(index: number) {
    this.teamNames.splice(index, 1);
    console.log("team is", this.teamNames);
  }

}
