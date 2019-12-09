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

  // teams: Array<Tourney> = [];
  teams = [];
  value = '';
  tourneyName: string;
  tourneyTitle: string;
  newTeam: string;
  disableSubmitButton = false;
  textDisabled = false;
  inText: string;
  constructor(private router: Router, private toastService: ToastService) { }

  ngOnInit() {
  }

  // navigateTo(path: string) {
  //   this.router.navigate([path]);
  // }

  tourney() {
    if (this.tourneyName === '' && this.newTeam === '' || this.newTeam === undefined || this.newTeam === null) {
      this.toastService.showToast('danger', 'Please enter name of tournament and participants.', 5000);
    } else if (this.tourneyName === '') {
      this.toastService.showToast('danger', 'Please enter name of tournament', 5000);
    } else if (this.newTeam === '' || this.newTeam === undefined) {
      this.toastService.showToast('danger', 'Please enter names of participants', 5000);
    } else {
      this.tourneyTitle = this.tourneyName;
      this.disableSubmitButton = true;
      this.textDisabled = true;
      this.teams.push(this.newTeam);
      console.log('newTeam... ', this.newTeam);
      const teams = this.newTeam.split(/[\r\n]+/);
      console.log(teams);
    }
  }

  clearAll() {
    this.tourneyTitle = null;
    this.disableSubmitButton = false;
    this.textDisabled = false;
    this.teams = [];
    // this.inText = '';
    console.log('Clear all array', this.teams);
    // only clears textbox on the first click
  }

  editSeeds() {
    // edit team names
    this.disableSubmitButton = false;
    this.textDisabled = false;
  }

  winner() {


  }



}
