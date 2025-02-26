import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  title = 'User';
  
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);  
  }
}