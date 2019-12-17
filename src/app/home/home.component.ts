import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tourney } from './home.module';
import { ToastModule } from '../toast/toast.module';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // teams = [];
  // winners: string[] = [];
  // value = '';
  // tourneyName = '';
  // tourneyTitle = '';
  // disableSubmitButton = false;
  // textDisabled = false;
  // inText: string;

  teams = [];
  value = '';
  tourneyName = '';
  tourneyTitle: string;
  disableSubmitButton = false;
  textDisabled = false;
  inText: string;
  teamNames: string[] = [];
  winners: string[] = [];
  teamName: string;
  teamN = '';
  teamTitle = '';

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }

  tourney(teamName = '') {
    if (this.tourneyName === '' && teamName === '') {
      this.toastService.showToast('danger', 'Please enter name of tournament and participants.', 3000);
    } else if (this.tourneyName === '') {
      this.toastService.showToast('danger', 'Please enter name of tournament', 3000);
    } else if (teamName === '') {
      this.toastService.showToast('danger', 'Please enter participants', 3000);
    } else if (this.teamName.indexOf(',') === -1) {
      this.toastService.showToast('danger', 'Seperate pariticpants using a comma', 3000);
    } else {
      this.tourneyTitle = this.tourneyName;
      this.disableSubmitButton = true;
      this.textDisabled = true;
      this.onTeamNamesChanged();
    }
  }

  clearAll() {
    this.tourneyTitle = null;
    this.disableSubmitButton = false;
    this.textDisabled = false;
    this.teamNames = [];
    this.winners = [];
  }

  onTeamNamesChanged() {
    this.teamNames = this.teamName.split(',');
    this.teamTitle = this.teamN;
  }

  editSeeds() {
    this.disableSubmitButton = false;
    this.textDisabled = false;
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
    console.log('team is', this.teamNames);
  }

  // tourney() {
  //   this.tourneyTitle = this.tourneyName;
  //   this.disableSubmitButton = true;
  //   this.textDisabled = true;
  // }

  // clearAll() {
  //   this.tourneyTitle = null;
  //   this.disableSubmitButton = false;
  //   this.textDisabled = false;
  //   this.teams = [];
  //   this.winners = [];
  // }

  // addTeams(newTeam: string) {
  //   if (newTeam) {
  //     this.teams.push([newTeam]);
  //     console.log("newTeam is", this.teams);
  //     this.teams = newTeam.split(/[\r\n]+/, 8);
  //     console.log("team is ", this.teams);
  //   }
  // }

  // removeTeams(index: number) {
  //   this.teams.splice(index, 1);
  //   console.log("team is", this.teams);
  // }

  // editSeeds() {
  //   this.disableSubmitButton = false;
  //   this.textDisabled = false;
  // }

  // random() {
  //   this.teams.sort((a, b) => 0.5 - Math.random());
  // }

  // winner(round: number, game: number, winner: string) {
  //   this.winners['round' + round + '-' + game] = winner;
  //   console.log('winnername...', this.winners);
  // }

  // getWinnerName(round: number, game: number) {
  //   const name = this.winners['round' + round + '-' + game];
  //   return (name !== undefined) ? name : '';
  // }

  // getTeamName(index: number) {
  //   return (this.teams.length >= index) ? this.teams[index] : '';
  // }
}
