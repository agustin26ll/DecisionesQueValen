import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HudComponent } from '../../../hud/hud.component';
import { GameService } from '../../../../core/service/game.service';
import { BOARD_POSITIONS } from '../../../../core/config/board.config';
import { DiceComponent } from '../../../dice/components/dice/dice.component';
import { PlayersPanelComponent } from '../players-panel/players-panel.component';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [
    HudComponent,
    DiceComponent,
    CommonModule,
    PlayersPanelComponent
  ],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})

export class GameBoardComponent {
  constructor(public game: GameService) { }

  getPosition(player: any) {
    return BOARD_POSITIONS[player.position % BOARD_POSITIONS.length];
  }

  getCurrentPlayer() {
    return this.game.players[0];
  }
}