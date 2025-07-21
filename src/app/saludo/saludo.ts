import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [],
  templateUrl: './saludo.html',
  styleUrl: './saludo.css'
})
export class Saludo {
  nombre = 'Lizeth';
  mensaje = `Hola, soy ${this.nombre} y esta es mi primera app Angular 👋`;

  cambiarMensaje(){
    this.mensaje = '¡Gracias por dar clic! 🎉';
  }

}
