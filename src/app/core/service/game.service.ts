import { Injectable } from "@angular/core";
import { Player } from "../models/player.model";

interface StartPlayer {
    name: string;
    color: string;
}

interface GameState {
    players: Player[];
    gameStarted: boolean;
    currentTurn: number;
    startTime: number;
}

@Injectable({ providedIn: 'root' })
export class GameService {

    private STORAGE_KEY = 'decision-game';

    players: Player[] = [];
    gameStarted = false;
    currentTurn = 0;
    startTime!: number;
    activeCardLevel: number | null = null;
    waitingCardAnswer = false;

    constructor() {
        this.loadGame();
    }

    startGame(playersData: StartPlayer[]) {

        this.players = playersData.map((p, index) => ({
            id: index,
            name: p.name,
            color: p.color,
            money: 1000000,
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

        this.saveGame();
    }

    private saveGame() {
        const state: GameState = {
            players: this.players,
            gameStarted: this.gameStarted,
            currentTurn: this.currentTurn,
            startTime: this.startTime
        };

        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
    }


    private loadGame() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (!saved) return;

        const state: GameState = JSON.parse(saved);

        this.players = state.players || [];
        this.gameStarted = state.gameStarted || false;
        this.currentTurn = state.currentTurn || 0;
        this.startTime = state.startTime || Date.now();
    }

    hasSavedGame(): boolean {
        return !!localStorage.getItem(this.STORAGE_KEY);
    }

    clearGame() {
        localStorage.removeItem(this.STORAGE_KEY);
    }

    getCurrentPlayer() {
        return this.players[this.currentTurn];
    }

    getPlayersCount() {
        return this.players.length;
    }

    rollDice(): number {
        const value = Math.floor(Math.random() * 6) + 1;
        return value;
    }

    addMoney(playerId: number, amount: number) {
        this.players[playerId].money += amount;
        this.saveGame();
    }

    removeMoney(playerId: number, amount: number) {
        this.players[playerId].money -= amount;
        this.saveGame();
    }

    nextTurn() {
        this.currentTurn++;
        if (this.currentTurn >= this.players.length) {
            this.currentTurn = 0;
        }
        this.saveGame();
    }

    movePlayer(playerId: number, steps: number) {
        this.players[playerId].position += steps;
        this.saveGame();
    }

    levelUp(playerId: number) {
        if (this.players[playerId].level < 4) {
            this.players[playerId].level++;
            this.saveGame();
        }
    }

    buyImprovement(playerId: number, key: keyof Player['improvements']) {
        this.players[playerId].improvements[key] = true;
        this.saveGame();
    }
}