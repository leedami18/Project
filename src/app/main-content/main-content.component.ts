import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
}

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  students: Array<IStudent> = [];

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Damian',
      lastName: 'Lee',
      course: 'Programming',
    };
    this.students[1] = {
      id: 1,
      firstName: 'Tom',
      lastName: 'Brady',
      course: 'Swimming',
    };
    this.students[2] = {
      id: 1,
      firstName: 'Mark',
      lastName: 'Zuc',
      course: 'Business',
    };
    this.students[3] = {
      id: 1,
      firstName: 'Joe',
      lastName: 'Biden',
      course: 'Politics',
    };
  }

  ngOnInit() {
  }

  addStudent() {
    const student: IStudent = {
      id: 1,
      firstName: 'Mike',
      lastName: 'Tyson',
      course: 'Boxing',
    }

    this.students.push(student);
  }

}
