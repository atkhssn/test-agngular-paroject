import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-not-found',
  imports: [ButtonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  title = 'Not Found';

  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle(this.title);  
  }

  goBackHome() {
    this.router.navigate(['/']);
  }
}