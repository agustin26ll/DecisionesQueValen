import { EffectType, TargetType } from "../models/effect.model";

export const CARD_CONFIG: any = {

    1: { // LEVEL 1 (cartas verdes)

        1: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 150000 },
                { type: EffectType.REPEAT_TURN, target: TargetType.SELF }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }
            ]
        },

        2: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 },
                { type: EffectType.MOVE, target: TargetType.SELF, value: 1 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }
            ]
        },

        3: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 150000 },
                { type: EffectType.SHIELD_NEXT_LOSS, target: TargetType.SELF }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }
            ]
        },

        4: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }
            ]
        },


        5: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 },
                { type: EffectType.MOVE, target: TargetType.SELF, value: 1 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }
            ]
        },

        6: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 150000 },
                { type: EffectType.REPEAT_TURN, target: TargetType.SELF }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }
            ]
        },

        7: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }
            ]
        },


        8: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 150000 },
                { type: EffectType.SHIELD_NEXT_LOSS, target: TargetType.SELF }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }
            ]
        },

        9: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 150000 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }
            ]
        },

        10: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 },
                { type: EffectType.MOVE, target: TargetType.SELF, value: 1 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }
            ]
        }

    },
    2: { // LEVEL 2 (cartas amarillas)

        1: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 },
                { type: EffectType.MOVE, target: TargetType.SELF, value: 2 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -300000 }
            ]
        },

        2: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }
            ]
        },

        3: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }
            ]
        },

        4: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 250000 },
                { type: EffectType.REPEAT_TURN, target: TargetType.SELF }
            ]
        },

        5: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -300000 }
            ]
        },

        6: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -300000 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }
            ]
        },

        7: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }
            ]
        },

        8: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 250000 },
                { type: EffectType.MOVE, target: TargetType.SELF, value: 1 }
            ]
        },

        9: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 150000 },
                { type: EffectType.SHIELD_NEXT_LOSS, target: TargetType.SELF }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }
            ]
        },

        10: {
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }
            ],
            wrong: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 250000 }
            ]
        }

    }


};