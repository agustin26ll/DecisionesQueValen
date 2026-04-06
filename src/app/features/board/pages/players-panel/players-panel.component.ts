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
        const r = parseInt(rgb[0]);
        const g = parseInt(rgb[1]);
        const b = parseInt(rgb[2]);
        const lighterR = Math.floor(r + (255 - r) * 0.7);
        const lighterG = Math.floor(g + (255 - g) * 0.7);
        const lighterB = Math.floor(b + (255 - b) * 0.7);
        return `rgb(${lighterR}, ${lighterG}, ${lighterB})`;
      }
    }

    if (color.startsWith('#')) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      const lighterR = Math.floor(r + (255 - r) * 0.7);
      const lighterG = Math.floor(g + (255 - g) * 0.7);
      const lighterB = Math.floor(b + (255 - b) * 0.7);
      return `rgb(${lighterR}, ${lighterG}, ${lighterB})`;
    }

    return color;
  }
}