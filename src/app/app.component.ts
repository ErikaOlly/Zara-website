import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './homepage.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  title = 'Welcome to my homepage';
  show = false;
  showSupport = false
  showLogin = false;

  onConsoleLog() {
    //this.showLogin=!this.showLogin;
    this.showLogin=true;
    console.log(this.showLogin);
  }
}