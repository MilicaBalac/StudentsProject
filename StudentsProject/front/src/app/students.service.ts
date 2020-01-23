import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './model/Student';
import { Order } from './model/order';
import { Exam } from './model/Exam';
import { Subject } from './model/Subject';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private readonly path = "/api/students";
  private readonly path2 = "/api/courses";
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.path);
  } 
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.path}/${id}`);
  }
  searchStudents(cardNumber: string): Observable<Student[]>{
    const params: HttpParams = new HttpParams().append('cardNumber', cardNumber);
    return this.http.get<Student[]>(this.path, { params });
  } 
  getWithGradeGreaterThan(minGrade: number):Observable<Student[]>{
    const params: HttpParams = new HttpParams().append('averageGraterThan', minGrade.toString());
    return this.http.get<Student[]>(this.path, {params});
  }
  getSorted(order: Order) : Observable<Student[]>{
    const params: HttpParams = new HttpParams().append('sortBy', order);
    return this.http.get<Student[]>(this.path, { params });
  }
  getMaxAverage() : Observable<Student[]>{
    return this.http.get<Student[]>(`${this.path}/maxAverage`);
  }
  getWithNextYearCondition() : Observable<Student[]>{
    return this.http.get<Student[]>(`${this.path}/forNextYear`);
  }
  postStudent(student: Student):Observable<Student> {
    return this.http.post<Student>(this.path, student);
  }
  addExamToStudent(id: number, exam: Exam): Observable<Exam>{
    return this.http.post<Exam>(`${this.path}/${id}/exams`, exam);
  }
  deleteStudent(id: number): Observable<Student>{
    return this.http.delete<Student>(`${this.path}/${id}`);
  }
  putStudent(student: Student): Observable<Student>{
    return this.http.put<Student>(`${this.path}/${student.id}`, student);
  }
  getSubjects(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.path2);
  }
}
