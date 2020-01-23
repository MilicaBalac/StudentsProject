import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '../model/Student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details-page',
  templateUrl: './student-details-page.component.html',
  styleUrls: ['./student-details-page.component.css']
})
export class StudentDetailsPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private studentService: StudentsService) { }

  private id: number;
  private student: Student;

  ngOnInit() {
    this.resetStudent();
    this.loadData();
  }

  loadData(){
    this.route.params.subscribe(param=>{
      this.id = param.id;
      this.studentService.getStudent(this.id)
      .subscribe((student: Student)=> this.student = student);
    });
  }

  resetStudent(){
    this.student = new Student({
      firstName: '',
      lastName: '',
      cardNumber: ''
    });
  }

}
