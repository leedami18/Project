import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

interface ITournment {
  team: string;
  editMode: boolean;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  teamArray: Array<any> = [];
  disableAddButton = false;
  constructor() { }

  ngOnInit() {
    this.teamArray = [
      {
        // Team1: 'qwe',
        // editMode: false
      },
      {
        // team2: 'qwe',
        // editMode: false
      }
    ];
  }

  addTeam() {
    this.teamArray.unshift({
      team: 'qwe',
        editMode: false
    });
    this.disableAddButton = true;
  }

  removeTeam(index: number) {
    this.teamArray.splice(index, 1);
  }
  saveStudent() {
    this.teamArray[0].editMode = false;
    this.disableAddButton = false;

    // this.sort('asc');
  }

  // sort(direction: string) {
  //   this.tournamentArray.sort((a: ITournment, b: ITournment) => {
  //     return a.id < b.id ? -1 : 1;
  //   });
  // }

}
