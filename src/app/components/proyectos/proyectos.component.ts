import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent {
  openLink(number: number) {
    switch (number) {
      case 1:
        window.open('https://luciagonzalezpresentacion.on.drv.tw/www.index.html/', '_blank');
        break;
      case 2:
        window.open('https://luciagonzalezpresentacion.wordpress.com/', '_blank');
        break;
      case 3:
        window.open('https://ejemplo.com', '_blank');
        break;
      default:
        console.error('Número de enlace no válido');
        break;
    }
  }
}
