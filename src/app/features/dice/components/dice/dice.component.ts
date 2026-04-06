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
  private turnEngine = new TurnEngine();

  constructor(private game: GameService) { }

  roll() {
    const dice = this.game.rollDice();
    this.result = dice;

    const player = this.turnEngine.getCurrentPlayer(this.game.players);
    player.position += dice;

    this.turnEngine.nextTurn(this.game.players);
  }
}