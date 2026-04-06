import { Component } from '@angular/core';
import { GameService } from '../../../../core/service/game.service';
import { TurnEngine } from '../../../../core/engine/turn.engine';
import { CommonModule } from '@angular/common';

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

  private turnEngine = new TurnEngine();

  constructor(private game: GameService) { }

  roll() {

    if (this.rolling) return;

    const player = this.turnEngine.getCurrentPlayer(this.game.players);
    this.currentColor = player.color;

    this.rolling = true;
    this.finalClass = '';

    setTimeout(() => {

      const dice = this.game.rollDice();
      this.result = dice;

      player.position += dice;
      this.turnEngine.nextTurn(this.game.players);

      this.rolling = false;
      this.finalClass = 'show-' + dice;

    }, 1000);
  }
}