import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentDetailsPageComponent } from './student-details-page/student-details-page.component';
import { ExamPageComponent } from './exam-page/exam-page.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'students', component: StudentPageComponent },
  { path: 'students/:id', component: StudentDetailsPageComponent},
  { path: 'students/:id/courses', component: ExamPageComponent},
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
