export enum EffectType {
    MONEY,
    MOVE,
    REPEAT_TURN,
    SHIELD_NEXT_LOSS,
    LEVEL_UP
}

export enum TargetType {
    SELF,
    ONE_OPPONENT,
    ALL_OPPONENTS
}

export interface Effect {
    type: EffectType;
    target: TargetType;
    value?: number;
}