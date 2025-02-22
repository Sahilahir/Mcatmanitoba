import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mcatmanitoba';

  constructor(private router: Router) {}

  navigateHome(){
    this.router.navigate(['/home'])
  }
  navigateAbout(){
    this.router.navigate(['/about'])
  }
  navigateContact(){
    this.router.navigate(['/contact'])
  }
  navigateEvents(){
    this.router.navigate(['/events'])
  }
  navigateByLaws(){
    this.router.navigate(['/by-laws'])
  }
  navigateResources(){
    this.router.navigate(['/resources'])
  }
  navigateResourceMaterial(){
    this.router.navigate(['/resource-material'])
  }
  navigateExecutiveBoard(){
    this.router.navigate(['/executive-board'])
  }
  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
