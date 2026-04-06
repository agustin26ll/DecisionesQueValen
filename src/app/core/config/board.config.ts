export type TileEffectType =
    | 'start'
    | 'card'
    | 'gain'
    | 'lose'
    | 'allLose'
    | 'othersLose'
    | 'attack'
    | 'finish';

export interface TileConfig {
    index: number;
    x: number;
    y: number;
    effect: TileEffectType;
    amount?: number;
}

export const BOARD_POSITIONS: TileConfig[] = [

    // NIVEL 1
    { index: 0, x: 111, y: 83, effect: 'start', amount: 1000000 },
    { index: 1, x: 252, y: 83, effect: 'card' },
    { index: 2, x: 382, y: 83, effect: 'lose', amount: 100000 },
    { index: 3, x: 512, y: 83, effect: 'card' },
    { index: 4, x: 649, y: 83, effect: 'gain', amount: 100000 },
    { index: 5, x: 791, y: 83, effect: 'card' },

    // NIVEL 2
    { index: 6, x: 973, y: 148, effect: 'othersLose', amount: 100000 },
    { index: 7, x: 973, y: 272, effect: 'card' },
    { index: 8, x: 973, y: 413, effect: 'allLose', amount: 150000 },
    { index: 9, x: 973, y: 537, effect: 'card' },
    { index: 10, x: 973, y: 652, effect: 'gain', amount: 200000 },
    { index: 11, x: 973, y: 747, effect: 'card' },

    // NIVEL 3
    { index: 12, x: 973, y: 872, effect: 'othersLose', amount: 100000 },
    { index: 13, x: 805, y: 872, effect: 'card' },
    { index: 14, x: 670, y: 872, effect: 'attack' },
    { index: 15, x: 537, y: 872, effect: 'card' },
    { index: 16, x: 410, y: 872, effect: 'lose', amount: 200000 },
    { index: 17, x: 270, y: 872, effect: 'card' },

    // NIVEL 4
    { index: 18, x: 110, y: 872, effect: 'othersLose', amount: 100000 },
    { index: 19, x: 110, y: 721, effect: 'card' },
    { index: 20, x: 110, y: 610, effect: 'allLose', amount: 150000 },
    { index: 21, x: 110, y: 470, effect: 'card' },
    { index: 22, x: 110, y: 370, effect: 'gain', amount: 300000 },
    { index: 23, x: 110, y: 260, effect: 'finish' }
];