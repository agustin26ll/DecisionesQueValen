import { Player } from '../models/player.model';

export class TurnEngine {
    private currentPlayerIndex = 0;

    getCurrentPlayer(players: Player[]): Player {
        return players[this.currentPlayerIndex];
    }

    nextTurn(players: Player[]): Player {
        this.currentPlayerIndex++;

        if (this.currentPlayerIndex >= players.length) {
            this.currentPlayerIndex = 0;
        }

        return this.getCurrentPlayer(players);
    }
}