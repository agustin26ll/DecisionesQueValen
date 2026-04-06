export enum BoardPositionType {
    CARD,
    MONEY_GAIN,
    MONEY_LOSS,
    LEVEL_UP,
    ATTACK_PLAYER,
    GLOBAL_CRISIS
}

export interface BoardPosition {
    id: number;
    x: number; // coordenadas %
    y: number;
    type: BoardPositionType;
    level?: number; // para posiciones de carta
    value?: number; // dinero o casillas
}