import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ProfileComponent } from './components/profile/profile.component';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    public auth: AuthService,
    //public profile: ProfileComponent
    ) {
    auth.handleAuthentication();

  }

  title = 'Wikipedia-Clone';
}
