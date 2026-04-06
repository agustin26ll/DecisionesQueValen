import { EffectType, TargetType } from "../models/effect.model";

export const CARD_CONFIG: any = {

    1: { // LEVEL 1

        1: {
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -100000 }]
        },

        2: {
            correct: [{ type: EffectType.MOVE, target: TargetType.SELF, value: 2 }],
            wrong: [{ type: EffectType.MOVE, target: TargetType.SELF, value: -1 }]
        },

        3: {
            correct: [{ type: EffectType.SHIELD_NEXT_LOSS, target: TargetType.SELF }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }]
        }

    }

};