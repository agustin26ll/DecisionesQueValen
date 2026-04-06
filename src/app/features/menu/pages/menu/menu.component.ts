import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  standalone: true,
})
export class MenuComponent {
  constructor(private router: Router) { }

  openSetup() {
    this.router.navigate(['/setup'], { state: { modal: true } });
  }
}
