import { Component, EventEmitter, Output } from '@angular/core';
import { GameService } from '../../core/service/game.service';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { CardService } from '../../core/service/card.service';
import { Card } from '../../core/models/card.model';

@Component({
  selector: 'app-card-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-panel.component.html',
  styleUrl: './card-panel.component.css',
  animations: [
    trigger('pulse', [
      transition('* => *', [
        animate('1.2s infinite', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.1)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ]),

    trigger('cardReveal', [
      transition(':enter', [
        style({ transform: 'scale(.2) rotate(-30deg)', opacity: 0 }),
        animate('500ms cubic-bezier(.17,.67,.35,1.4)',
          style({ transform: 'scale(1) rotate(0)', opacity: 1 }))
      ])
    ])
  ]
})

export class CardPanelComponent {
  @Output() draw = new EventEmitter<void>();

  constructor(public game: GameService) { }

  getCardBack() {
    if (!this.game.activeCardLevel) return '';
    return `\assets/cards/LVL${this.game.activeCardLevel}/Contraparte.png`;
  }
  
  takeCard() {
    this.draw.emit();
  }
}
