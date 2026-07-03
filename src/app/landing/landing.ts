import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {}
