import { Injectable } from "@angular/core";
import { Player } from "../models/player.model";

interface StartPlayer {
    name: string;
    color: string;
}

@Injectable({ providedIn: 'root' })
export class GameService {

    players: Player[] = [];
    gameStarted = false;
    currentTurn = 0;
    startTime!: number;

    startGame(playersData: StartPlayer[]) {

        this.players = playersData.map((p, index) => ({
            id: index,
            name: p.name,
            color: p.color,

            money: 0,
            level: 1,
            position: 0,
            shieldNextLoss: false,

            improvements: {
                marketing: false,
                equipo: false,
                tecnologiaAvailable: false,
                expansionAvailable: false
            }
        }));

        this.currentTurn = 0;
        this.startTime = Date.now();
        this.gameStarted = true;
        console.log('PLAYERS CREATED', this.players);
    }

    rollDice(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    getCurrentPlayer() {
        return this.players[this.currentTurn];
    }

    getPlayersCount() {
        return this.players.length;
    }
}