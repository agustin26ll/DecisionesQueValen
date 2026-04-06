import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({ providedIn: 'root' })
export class CardService {

    deck: Card[] = [
        this.createCard(1),
        this.createCard(2),
        this.createCard(3),
        this.createCard(4),
        this.createCard(5),
        this.createCard(6),
        this.createCard(7),
        this.createCard(8),
        this.createCard(9),
        this.createCard(10),
    ];

    private createCard(id: number): Card {
        return {
            id: id,
            level: 1,
            image: `assets/cards/LVL1/Card0${id}.png`,
            correctOption: Math.random() > 0.5 ? 'A' : 'B',

            effectsOnCorrect: [],
            effectsOnWrong: []
        };
    }

    drawCard(): Card {
        const random = Math.floor(Math.random() * this.deck.length);
        return this.deck[random];
    }
}