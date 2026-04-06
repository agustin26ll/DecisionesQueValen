import { Component } from '@angular/core';
import { ThemeService } from '../../../../core/service/theme.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  colors = [
    '#0F1117',
    '#121826',
    '#1B263B',
    '#0B3D3B',
    '#2B2D42'
  ];

  constructor(private theme: ThemeService) { }

  change(color: string) {
    this.theme.setBackground(color);
  }
}
