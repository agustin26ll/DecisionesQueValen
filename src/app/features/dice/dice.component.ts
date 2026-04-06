import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileEngine } from '../../core/engine/tile.engine';
import { GameService } from '../../core/service/game.service';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.css'
})
export class DiceComponent {

  result: number | null = null;
  rolling = false;
  finalClass = '';
  currentColor = '#ffffff';

  constructor(private game: GameService) { }

  roll() {

    if (this.rolling || this.game.waitingCardAnswer) return;

    const player = this.game.getCurrentPlayer();
    this.currentColor = player.color;

    this.rolling = true;
    this.finalClass = '';

    setTimeout(() => {

      const dice = this.game.rollDice();
      this.result = dice;

      player.position += dice;

      const result = TileEngine.resolveTile(player, this.game.players);

      if (result === "CARD") {
        this.game.activeCardLevel = player.level;
        this.game.waitingCardAnswer = true;
      } else {
        // 👇 SOLO GameService maneja turnos
        this.game.nextTurn();
      }

      this.rolling = false;
      this.finalClass = 'show-' + dice;

    }, 1000);
  }
}