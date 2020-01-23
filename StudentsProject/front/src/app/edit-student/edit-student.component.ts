import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Student } from '../model/Student';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditStudentComponent implements OnInit {

  @Input()
  studentToEdit: Student;

  @Output()
  editedStudent: EventEmitter<Student> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editStudent(){
    this.editedStudent.next(this.studentToEdit);
  }

}
