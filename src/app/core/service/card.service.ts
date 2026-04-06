import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { CARD_CONFIG } from '../config/card.config';

@Injectable({ providedIn: 'root' })
export class CardService {

    private TOTAL_CARDS = 10;

    drawCard(level: number, player: any): Card {

        if (!player.cardsSeen) {
            player.cardsSeen = { 1: new Set(), 2: new Set(), 3: new Set(), 4: new Set() };
        }

        const seenCards: Set<number> = player.cardsSeen[level];

        const availableCards: number[] = [];

        for (let i = 1; i <= this.TOTAL_CARDS; i++) {
            if (!seenCards.has(i)) availableCards.push(i);
        }

        if (availableCards.length === 0) {
            player.cardsSeen[level].clear();
            return this.drawCard(level, player);
        }

        const id = availableCards[Math.floor(Math.random() * availableCards.length)];
        seenCards.add(id);

        const formattedId = id.toString().padStart(2, '0');
        const config = CARD_CONFIG[level]?.[id];

        return {
            id,
            level,
            image: `assets/cards/LVL${level}/Card${formattedId}.png`,
            correctOption: Math.random() > 0.5 ? 'A' : 'B',
            effectsOnCorrect: config?.correct ?? [],
            effectsOnWrong: config?.wrong ?? []
        };
    }
}