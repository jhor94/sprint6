import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home/home.component";
import { WelcomeComponent } from "./welcome/welcome/welcome.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, WelcomeComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'presupuestos';
}
