import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'students';

  constructor(private authenticationService: AuthenticationService){}

  isLoggedIn(){
    return this.authenticationService.isLoggedIn();
  }
  isLoggedOut(){
     return this.authenticationService.isLoggedOut();
  }
  logOut() {
    this.authenticationService.logout();
  }
}
