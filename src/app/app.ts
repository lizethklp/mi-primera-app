import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from './saludo/saludo'; // 👈 Asegúrate de importar esto

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, Saludo], // 👈 Todo en una sola línea
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {
  protected readonly title = signal('mi-primera-app')
}


