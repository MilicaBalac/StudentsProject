import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Student, StudentInterface } from '../model/Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentListComponent implements OnInit {

  @Input()
  students: Student[];
  @Input()
  student: Student;
  @Input()
  isAdministrator: boolean;
  @Output()
  studentDeleted: EventEmitter<number> = new EventEmitter();
  @Output()
  markStudentForEditing: EventEmitter<Student> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteStudent(id: number){
    this.studentDeleted.next(id);
  }
  editStudent(student: Student) {
    this.markStudentForEditing.next(student);
  }

}
