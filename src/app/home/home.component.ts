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

  teams = [];
  value = '';
  tourneyName = '';
  tourneyTitle: string;
  disableSubmitButton = false;
  textDisabled = false;
  inText: string;
  teamNames: string[] = [];
  winners: string[] = [];

  constructor(private router: Router, private toastService: ToastService) { }

  ngOnInit() {

  }

  tourney(newTeam= '') {
    if (this.tourneyName === '' && newTeam === '') {
      this.toastService.showToast('danger', 'Please enter name of tournament and participants.', 3000);
    } else if (this.tourneyName === '') {
      this.toastService.showToast('danger', 'Please enter name of tournament', 3000);
    } else if (newTeam === '') {
      this.toastService.showToast('danger', 'Please enter participants', 3000);
    } else {
      this.tourneyTitle = this.tourneyName;
      this.disableSubmitButton = true;
      this.textDisabled = true;
      this.teams.push(newTeam);
      const teams = newTeam.split(/[\r\n]+/);
    }
  }

  clearAll() {
    this.tourneyTitle = null;
    this.disableSubmitButton = false;
    this.textDisabled = false;
    this.teams = [];
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



}
