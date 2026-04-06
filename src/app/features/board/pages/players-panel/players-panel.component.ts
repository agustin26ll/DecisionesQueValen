import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../../../core/service/game.service';

@Component({
  selector: 'app-players-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players-panel.component.html',
  styleUrl: './players-panel.component.css'
})

export class PlayersPanelComponent {
  constructor(public game: GameService) { }

  getLighterColor(color: string): string {
    if (color.startsWith('rgb')) {
      const rgb = color.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        let r = parseInt(rgb[0]);
        let g = parseInt(rgb[1]);
        let b = parseInt(rgb[2]);

        // Oscurecer pero mantener viveza (reducir un 30% en lugar de mezclar con blanco)
        r = Math.floor(r * 0.7);
        g = Math.floor(g * 0.7);
        b = Math.floor(b * 0.7);

        return `rgb(${r}, ${g}, ${b})`;
      }
    }

    if (color.startsWith('#')) {
      let r = parseInt(color.slice(1, 3), 16);
      let g = parseInt(color.slice(3, 5), 16);
      let b = parseInt(color.slice(5, 7), 16);

      // Oscurecer pero mantener viveza
      r = Math.floor(r * 0.7);
      g = Math.floor(g * 0.7);
      b = Math.floor(b * 0.7);

      return `rgb(${r}, ${g}, ${b})`;
    }

    return color;
  }
}