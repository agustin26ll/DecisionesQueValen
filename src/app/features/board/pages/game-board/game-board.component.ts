import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HudComponent } from '../../../hud/hud.component';
import { GameService } from '../../../../core/service/game.service';
import { BOARD_POSITIONS } from '../../../../core/config/board.config';
import { DiceComponent } from '../../../dice/dice.component';
import { PlayersPanelComponent } from '../players-panel/players-panel.component';
import { CardPanelComponent } from '../../../card-panel/card-panel.component';
import { CardService } from '../../../../core/service/card.service';
import { Card } from '../../../../core/models/card.model';
import { trigger, style, animate, transition } from '@angular/animations';
import { EffectEngine } from '../../../../core/engine/effect.engine';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [
    HudComponent,
    DiceComponent,
    CommonModule,
    PlayersPanelComponent,
    CardPanelComponent
  ],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css',
  animations: [
    trigger('cardReveal', [
      transition(':enter', [
        style({ transform: 'scale(.2) rotate(-30deg)', opacity: 0 }),
        animate('500ms cubic-bezier(.17,.67,.35,1.4)',
          style({ transform: 'scale(1) rotate(0)', opacity: 1 }))
      ])
    ])
  ]
})

export class GameBoardComponent {

  showCard = false;
  currentCard: Card | null = null;

  constructor(public game: GameService, private cardService: CardService) { }

  getPosition(player: any) {
    const base = BOARD_POSITIONS[player.position % BOARD_POSITIONS.length];

    const offsetStep = 1.8;
    const offset = player.id * offsetStep;

    return {
      x: base.x + offset,
      y: base.y + offset
    };
  }

  getCurrentPlayer() {
    return this.game.getCurrentPlayer();
  }

  drawCard() {
    const player = this.getCurrentPlayer();

    this.currentCard = this.cardService.drawCard(player.level, player);

    this.game.waitingCardAnswer = true; // CONGELA EL JUEGO
    this.showCard = true;
  }

  answer(option: 'A' | 'B') {
    const player = this.getCurrentPlayer();

    const effects = option === this.currentCard!.correctOption
      ? this.currentCard!.effectsOnCorrect
      : this.currentCard!.effectsOnWrong;

    EffectEngine.applyEffects(effects, player, this.game.players);

    this.game.waitingCardAnswer = false;
    this.showCard = false;

    this.game.finishTurnAfterCard();
  }
}