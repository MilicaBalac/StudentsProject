import {
  Component,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';

import { Order } from '../model/order';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit {

  averageGrade: number;
  orderTypes = Order;

  @Output()
  filteredByAvgGrade: EventEmitter<number> = new EventEmitter();

  @Output()
  filteredByMaxGrade: EventEmitter<any> = new EventEmitter();

  @Output()
  sortedByAvgGrade: EventEmitter<Order> = new EventEmitter();

  @Output()
  filteredByNextYearCondition: EventEmitter<any> = new EventEmitter();

  @Output()
  resetFilter: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.averageGrade = 0;
  }

  ngOnInit() {
  }

  filterByAvgGradeGraterThan() {
    this.filteredByAvgGrade.next(this.averageGrade);
  }

  filterByMaxGrade() {
    this.filteredByMaxGrade.next();
  }

  sortByAvgGrade(order: Order) {
    this.sortedByAvgGrade.next(order);
  }

  filterByNextYearCondition() {
    this.filteredByNextYearCondition.next();
  }

  reset() {
    this.resetFilter.next();
    this.averageGrade = 0;
  }

}
