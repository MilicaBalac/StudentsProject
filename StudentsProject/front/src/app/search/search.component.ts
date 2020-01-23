import { Component, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  @Output()
  setSearchTerm: EventEmitter<string> = new EventEmitter();
  searchTerm: string;
  constructor() {
    this.searchTerm="";
   }

  ngOnInit() {
  }

  search() {
    this.setSearchTerm.next(this.searchTerm);
  }
  reset(){
    this.searchTerm="";
    this.setSearchTerm.next(this.searchTerm);
  }

}
