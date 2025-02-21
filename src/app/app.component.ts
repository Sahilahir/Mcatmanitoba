import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mcatmanitoba';

  constructor(private router: Router) {}

  navigateHome(){
    console.log("going to vehicles");
    this.router.navigate(['/home'])
  }
  navigateAbout(){
    console.log("going to vehicles");
    this.router.navigate(['/about'])
  }
  navigateContact(){
    console.log("going to vehicles");
    this.router.navigate(['/contact'])
  }
  navigateEvents(){
    console.log("going to vehicles");
    this.router.navigate(['/events'])
  }
}
