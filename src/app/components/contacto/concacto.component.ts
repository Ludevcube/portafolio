import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-concacto',
  templateUrl: './concacto.component.html'
})
export class ConcactoComponent {
  contact = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  sendMessage() {
    const { nombre, email, mensaje } = this.contact;
    const mensajeWhatsApp = `Hola, soy ${nombre} y mi correo electrónico es ${email}. \n\n${mensaje}`;
    const numeroWhatsApp = '543472433839'; 
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
