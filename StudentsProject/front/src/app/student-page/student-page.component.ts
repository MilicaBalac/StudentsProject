import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StudentInterface, Student } from '../model/Student';
import { AuthenticationService } from '../authentication.service';
import { StudentsService } from '../students.service';
import { Order } from '../model/order';



@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentPageComponent implements OnInit {

  public students: StudentInterface[];
  public activeStudent: Student;
  public isAdministrator: boolean;

  constructor(private authenticationService: AuthenticationService, private studentService: StudentsService) { }

  ngOnInit() {
    this.isAdministrator = this.authenticationService.getCurrentUser().roles.indexOf('ROLE_ADMIN') !== -1;

    this.resetActiveStudent();
    this.loadData();
  }

  loadData(){
    this.studentService.getStudents().subscribe((res: any) => this.students = res);
  }

  resetActiveStudent(){
    this.activeStudent = new Student({
      firstName: '',
      lastName: '',
      cardNumber: ''
    })
  }

  

  addStudent(student: Student){
    this.studentService.postStudent(student).subscribe((res) => this.loadData());
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe((res)=> this.loadData());
  }

  editStudent(student: Student){
    this.studentService.putStudent(student).subscribe((res)=> {
      this.resetActiveStudent(),
      this.loadData()
    }
  )
}
  setActiveStudent(student: Student) {
    this.activeStudent = new Student(student);
  }

  search(cardNumber: string) {
    this.studentService.searchStudents(cardNumber).subscribe((res: Student[])=> this.students = res);
  }

  filterByAvgGrade(grade: number) {
    this.studentService.getWithGradeGreaterThan(grade).subscribe((res: Student[])=> this.students = res);
  }

  filterByMaxGrade() {
    this.studentService.getMaxAverage().subscribe((res: Student[])=> this.students = res);
  }

  fiterByNextYearCondition() {
    this.studentService.getWithNextYearCondition().subscribe((res: Student[])=> this.students = res);
  }

  sortByGrade(order: Order) {
    this.studentService.getSorted(order).subscribe((res: Student[])=> this.students = res);
  }

}
