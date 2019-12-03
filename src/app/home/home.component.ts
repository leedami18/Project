import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tourney } from './home.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  teamName: string;
  teamNames: string[] = [];
  winners: string[] = [];
  tourneyName = '';
  tourneyTitle = '';
  teamTitle = '';
  teamN = '';
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

  onTeamNamesChanged() {
    this.teamNames = this.teamName.split(',');
    this.teamTitle = this.teamN;
  }

  getTeamName(index: number) {
    return (this.teamNames.length >= index) ? this.teamNames[index] : '';
  }

  editSeeds() {
    // edit team names
    this.disableSubmitButton = false;
    this.textDisabled = false;
  }

  winner(round: number, game: number, winner: string) {
    this.winners['round' + round + '-' + game] = winner;
  }

  getWinnerName(round: number, game: number) {
    const name = this.winners['round' + round + '-' + game];
    return (name !== undefined) ? name : '';
  }

  randomize() {}

}
