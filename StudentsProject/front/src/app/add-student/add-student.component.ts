import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { Student } from '../model/Student';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddStudentComponent implements OnInit {

  @Output()
  addedStudent: EventEmitter<Student> = new EventEmitter();


 
  studentToAdd: Student;

  constructor() { }

  ngOnInit() {
    this.resetStudentToAdd();
  }

  saveStudent() {
    this.addedStudent.next(this.studentToAdd);
    this.resetStudentToAdd();
  }

  

  resetStudentToAdd() {
   this.studentToAdd = new Student({
    id: 0, 
    firstName: '',
    lastName: '',
    cardNumber: ''
  });
}

}