import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-app-preloader',
  imports: [NgIf],
  templateUrl: './app-preloader.component.html',
  styleUrl: './app-preloader.component.css'
})
export class AppPreloaderComponent {
  showPreloader = signal(true);
  currentText = signal('Preparing...');
  progress = signal(0);

  private texts = ['Preparing...', 'Initializing...', 'Loading...'];
  private index = 0;

  ngOnInit(): void {
    this.startPreloader();
  }

  private startPreloader(): void {
    const interval = setInterval(() => {
      if (this.index < this.texts.length) {
        this.currentText.set(this.texts[this.index]);
        this.progress.set(((this.index + 1) / this.texts.length) * 100);
        this.index++;
      } else {
        clearInterval(interval);
        setTimeout(() => this.showPreloader.set(false), 500);
      }
    }, 500000);
  }
}