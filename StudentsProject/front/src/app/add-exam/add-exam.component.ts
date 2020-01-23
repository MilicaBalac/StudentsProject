import {
  Component,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output,
  Input
} from '@angular/core';
import { Exam } from '../model/Exam';
import { Subject } from '../model/Subject';


@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddExamComponent implements OnInit {

  @Output()
  examAdded: EventEmitter<Exam> = new EventEmitter();

  @Input()
  isDataFetched: boolean;

  @Input()
  subjects: Subject[];

  examToAdd: Exam;

  constructor() { }

  ngOnInit() {
    this.resetExamToAdd();
  }

  addExam(){
    this.examAdded.next(this.examToAdd);
  }

  resetExamToAdd() {
    this.examToAdd = new Exam({
      grade: 0,
      course: new Subject({
        code: '',
        name: '',
        espb: 0
      })
    })
  }

}
