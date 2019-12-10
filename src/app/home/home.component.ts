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

  constructor(private router: Router, private toastService: ToastService) { }

  ngOnInit() {

  }

  tourney(newTeam= '') {
    if (this.tourneyName === '' && newTeam === '') {
      this.toastService.showToast('danger', 'Please enter name of tournament and participants.', 10000);
    } else if (this.tourneyName === '') {
      this.toastService.showToast('danger', 'Please enter name of tournament', 10000);
    } else if (newTeam === '') {
      this.toastService.showToast('danger', 'Please enter participants', 10000);
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

  winner() {


  }



}
