import { Component } from '@angular/core';
import { GameService } from '../../core/service/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-panel.component.html',
  styleUrl: './card-panel.component.css'
})

export class CardPanelComponent {
  constructor(public game: GameService) { }

  getCardBack() {
    if (!this.game.activeCardLevel) return '';
    return `\assets/cards/LVL${this.game.activeCardLevel}/Contraparte.png`;
  }
}
