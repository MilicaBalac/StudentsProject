import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exam } from '../model/Exam';
import { Subject } from '../model/Subject';
import { StudentsService } from '../students.service';
import { Student } from '../model/Student';


@Component({
  selector: 'app-exams-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExamPageComponent implements OnInit {

  private id: number;
  private exams: Exam[];
  private subjects: Subject[];
  private isDataFetched: boolean;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentsService) {

      this.isDataFetched = false;
   }

  ngOnInit() {
    this.loadData();
  }

  filterNonPassedSubjects(allSubjects: Subject[]) {
    const passedSubjects = this.exams.map(e => e.course.id);
    this.subjects = allSubjects.filter(s => !passedSubjects.includes(s.id));
  }

  addExam(exam: Exam) {
    this.studentService.addExamToStudent(this.id, exam).subscribe(res => this.loadData());
  }

  loadData() {
    this.route.params.subscribe(param => {
      this.id = param.id;
      this.studentService.getStudent(this.id).subscribe(
        (student: Student) => {
          this.exams = student.exams;

          this.studentService.getSubjects().subscribe(
            (subjects: Subject[]) => {
              this.filterNonPassedSubjects(subjects);
              this.isDataFetched = true;
            });
        });
    });
  }
}
