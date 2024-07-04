import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html'
})
export class SobremiComponent {

  constructor(private router: Router) {}

  redirectTo() {
    this.router.navigate(['/proyectos']);
  }
}
