import { Effect } from "./effect.model";

export interface Card {
    id: number;
    level: number;
    image: string;
    correctOption: 'A' | 'B';

    effectsOnCorrect: Effect[];
    effectsOnWrong: Effect[];
}