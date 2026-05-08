import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('covid-dashboard');
}
