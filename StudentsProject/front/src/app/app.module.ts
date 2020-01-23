import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthenticationService } from './authentication.service';
import { CanActivateAuthGuard } from './can-activate-auth.guard';
import { JwtUtilsService } from './jwt-utils.service';
import { LoginComponent } from './login/login.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentDetailsPageComponent } from './student-details-page/student-details-page.component';

import { AddExamComponent } from './add-exam/add-exam.component';
import { ExamPageComponent } from './exam-page/exam-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentPageComponent,
    StudentListItemComponent,
    StudentListComponent,
    SearchComponent,
    FilterComponent,
    AddStudentComponent,
    EditStudentComponent,
    PageNotFoundComponent,
    StudentDetailsPageComponent,
    ExamPageComponent,
    AddExamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthenticationService,
    CanActivateAuthGuard,
    JwtUtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
