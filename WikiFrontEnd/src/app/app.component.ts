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

  profile: any;
  
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
    console.log("Profile: ", this.profile);
  }

  title = 'Wikipedia-Clone';

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
    console.log("Profile: ", this.profile);
  }
  /*
  clickProfileImage(){
    console.log("hi");
  }*/
}
