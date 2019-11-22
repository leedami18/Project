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

  teamNames() {
    // this.teamName = this.teamName.split(/[\r\n]+/);
  }

  parseTeamNames() {
    //
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
