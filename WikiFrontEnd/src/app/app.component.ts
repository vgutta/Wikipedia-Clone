import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { UdPagesService } from './services/ud-pages.service';
import { ProfileComponent } from './components/profile/profile.component';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profile: any;
  
  constructor(public auth: AuthService, private pagesService: UdPagesService) {
    auth.handleAuthentication();
  }

  title = 'Wikipedia Clone';

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  createNewPage() {
    
    this.pagesService.postPage("New Page")
      .subscribe();
    //console.log("Create New Page");
  }
}
