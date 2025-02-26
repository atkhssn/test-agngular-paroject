import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-auth-layout',
  imports: [],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {
  title = 'Login';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);  
  }
}