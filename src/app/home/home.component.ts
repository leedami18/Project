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
  tourneyName = '';
  tourneyTitle: string;
  disableSubmitButton = false;
  textDisabled = false;
  inText: string;
  constructor(private router: Router, private toastService: ToastService) { }

  ngOnInit() {
  }

  // navigateTo(path: string) {
  //   this.router.navigate([path]);
  // }


  tourney(newTeam= '') {
    if (this.tourneyName === '' && newTeam === '') {
      this.toastService.showToast('danger', 'Please enter name of tournament and participants.', 3000);
      console.log('from if...tourneyName...', this.tourneyName);
      console.log('from if...newTeam', newTeam);
    } else if (this.tourneyName === '') {
      this.toastService.showToast('danger', 'Please enter name of tournament', 3000);
      console.log('from else if1...tourneyName...', this.tourneyName);
      console.log('from else if1...newTeam', newTeam);
    } else if (newTeam === '') {
      this.toastService.showToast('danger', 'Please enter participants', 3000);
      console.log('from else if1...tourneyName...', this.tourneyName);
      console.log('from else if1...newTeam', newTeam);
    } else {
      this.tourneyTitle = this.tourneyName;
      this.disableSubmitButton = true;
      this.textDisabled = true;
      this.teams.push(newTeam);
      console.log('newTeam... ', newTeam);
      const teams = newTeam.split(/[\r\n]+/);
      console.log(teams);
      console.log('from else...tourneyName...', this.tourneyName);
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
