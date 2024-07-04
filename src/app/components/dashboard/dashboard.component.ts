import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent {

  constructor(private router: Router) {}

  redirectTo(number: number) {
    if (number === 1) {
      this.router.navigate(['/sobre-mi']);
    } else if (number === 2) {
      this.router.navigate(['/proyectos']);
    }
  }
}
