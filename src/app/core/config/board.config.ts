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
    { index: 0, x: 10.2, y: 8.3, effect: 'start', amount: 1000000 },
    { index: 1, x: 23.1, y: 8.3, effect: 'card' },
    { index: 2, x: 35.1, y: 8.3, effect: 'lose', amount: 100000 },
    { index: 3, x: 47.1, y: 8.3, effect: 'card' },
    { index: 4, x: 59.7, y: 8.3, effect: 'gain', amount: 100000 },
    { index: 5, x: 72.7, y: 8.3, effect: 'card' },

    // NIVEL 2
    { index: 6, x: 89.4, y: 14.8, effect: 'othersLose', amount: 100000 },
    { index: 7, x: 89.4, y: 27.2, effect: 'card' },
    { index: 8, x: 89.4, y: 41.3, effect: 'allLose', amount: 150000 },
    { index: 9, x: 89.4, y: 53.7, effect: 'card' },
    { index: 10, x: 89.4, y: 65.2, effect: 'gain', amount: 200000 },
    { index: 11, x: 89.4, y: 74.7, effect: 'card' },

    // NIVEL 3
    { index: 12, x: 89.4, y: 87.2, effect: 'othersLose', amount: 100000 },
    { index: 13, x: 74.0, y: 87.2, effect: 'card' },
    { index: 14, x: 61.6, y: 87.2, effect: 'attack' },
    { index: 15, x: 49.3, y: 87.2, effect: 'card' },
    { index: 16, x: 37.7, y: 87.2, effect: 'lose', amount: 200000 },
    { index: 17, x: 24.8, y: 87.2, effect: 'card' },

    // NIVEL 4
    { index: 18, x: 10.1, y: 87.2, effect: 'othersLose', amount: 100000 },
    { index: 19, x: 10.1, y: 72.1, effect: 'card' },
    { index: 20, x: 10.1, y: 61.0, effect: 'allLose', amount: 150000 },
    { index: 21, x: 10.1, y: 47.0, effect: 'card' },
    { index: 22, x: 10.1, y: 37.0, effect: 'gain', amount: 300000 },
    { index: 23, x: 10.1, y: 26.0, effect: 'finish' }
];