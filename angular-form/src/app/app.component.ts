import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';
  public topics = ["Angular", "React", "Vue"];
  userModel = new User("Sohail", "msn@gmail.com", 323434234, "", "morning", true);
}
