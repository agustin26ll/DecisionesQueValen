import { EffectType, TargetType } from "../models/effect.model";

export const CARD_CONFIG: any = {

    1: { // LEVEL 1

        1: { // Flujo de caja en crecimiento (impar → A correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 150000 },
                { type: EffectType.REPEAT_TURN, target: TargetType.SELF }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }]
        },

        2: { // Estrategia de precios (par → B correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 },
                { type: EffectType.MOVE, target: TargetType.SELF, value: 1 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }]
        },

        3: { // Uso del crédito (impar → A correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 150000 },
                { type: EffectType.SHIELD_NEXT_LOSS, target: TargetType.SELF }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }]
        },

        4: { // Reinversión (par → B correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }]
        },

        5: { // Cliente grande (impar → A correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 },
                { type: EffectType.MOVE, target: TargetType.SELF, value: 1 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }]
        },

        6: { // Inventario (par → B correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 150000 },
                { type: EffectType.REPEAT_TURN, target: TargetType.SELF }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }]
        },

        7: { // Marketing (impar → A correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }]
        },

        8: { // Costos (par → B correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 150000 },
                { type: EffectType.SHIELD_NEXT_LOSS, target: TargetType.SELF }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }]
        },

        9: { // Contratación (impar → A correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 150000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }]
        },

        10: { // Organización financiera (par → B correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 },
                { type: EffectType.MOVE, target: TargetType.SELF, value: 1 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }]
        }

    },
    2: { // LEVEL 2

        1: { // Expansión (impar → B correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 200000 },
                { type: EffectType.MOVE, target: TargetType.SELF, value: 2 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -300000 }]
        },

        2: { // Inflación (par → A correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }]
        },

        3: { // Diversificación (impar → B correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }]
        },

        4: { // Tecnología (par → A correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 250000 },
                { type: EffectType.REPEAT_TURN, target: TargetType.SELF }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }]
        },

        5: { // Cliente dominante (impar → B correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -300000 }]
        },

        6: { // Endeudamiento (par → A correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -300000 }]
        },

        7: { // Costos ocultos (impar → B correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }]
        },

        8: { // Marketing estratégico (par → A correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 250000 },
                { type: EffectType.MOVE, target: TargetType.SELF, value: 1 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }]
        },

        9: { // Flujo irregular (impar → B correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 150000 },
                { type: EffectType.SHIELD_NEXT_LOSS, target: TargetType.SELF }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }]
        },

        10: { // Operación (par → A correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 250000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }]
        }

    }, 3: { // LEVEL 3

        1: { // Inversión en publicidad (impar → A correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 300000 },
            { type: EffectType.MOVE, target: TargetType.SELF, value: 1 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }]
        },

        2: { // Expansión internacional (par → B correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 300000 },
            { type: EffectType.REPEAT_TURN, target: TargetType.SELF }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -300000 }]
        },

        3: { // Reinversión constante (impar → A correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 300000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }]
        },

        4: { // Flujo de caja negativo (par → B correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 150000 },
            { type: EffectType.SHIELD_NEXT_LOSS, target: TargetType.SELF }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -300000 }]
        },

        5: { // Escalabilidad (impar → A correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 250000 },
            { type: EffectType.MOVE, target: TargetType.SELF, value: 1 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }]
        },

        6: { // Inversión múltiple (par → B correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 250000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -300000 }]
        },

        7: { // Evaluación de riesgo (impar → A correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 200000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -300000 }]
        },

        8: { // Liquidez (par → B correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 200000 },
            { type: EffectType.SHIELD_NEXT_LOSS, target: TargetType.SELF }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }]
        },

        9: { // Estructura empresarial (impar → A correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 250000 },
            { type: EffectType.REPEAT_TURN, target: TargetType.SELF }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }]
        },
        10: { // Canal de ventas único (impar → A correcta)
            correct: [{ type: EffectType.MONEY, target: TargetType.SELF, value: 250000 }],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -300000 }]
        }

    },
    4: { // LEVEL 4

        1: { // Guerra de precios (impar → B correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 250000 },
                { type: EffectType.MONEY, target: TargetType.ONE_OPPONENT, value: -150000 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }]
        },

        2: { // Innovación de mercado (par → A correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 300000 },
                { type: EffectType.MONEY, target: TargetType.ALL_OPPONENTS, value: -100000 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }]
        },

        3: { // Talento clave (impar → B correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 250000 },
                { type: EffectType.MONEY, target: TargetType.ONE_OPPONENT, value: -150000 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }]
        },

        4: { // Publicidad agresiva (par → A correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 300000 },
                { type: EffectType.MOVE, target: TargetType.SELF, value: 2 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }]
        },

        5: { // Alianza estratégica (impar → B correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 250000 },
                { type: EffectType.REPEAT_TURN, target: TargetType.SELF }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -150000 }]
        },

        6: { // Expansión global (par → A correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 300000 },
                { type: EffectType.MONEY, target: TargetType.ALL_OPPONENTS, value: -100000 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -400000 }]
        },

        7: { // Saturación del mercado (impar → B correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 250000 },
                { type: EffectType.MONEY, target: TargetType.ONE_OPPONENT, value: -100000 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }]
        },

        8: { // Crisis económica (par → A correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: -100000 },
                { type: EffectType.MOVE, target: TargetType.SELF, value: 1 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -400000 }]
        },

        9: { // Posicionamiento (impar → B correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 250000 },
                { type: EffectType.MONEY, target: TargetType.ONE_OPPONENT, value: -100000 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -250000 }]
        },

        10: { // Dominio del mercado (par → A correcta)
            correct: [
                { type: EffectType.MONEY, target: TargetType.SELF, value: 400000 },
                { type: EffectType.MONEY, target: TargetType.ALL_OPPONENTS, value: -100000 }
            ],
            wrong: [{ type: EffectType.MONEY, target: TargetType.SELF, value: -200000 }]
        }

    }
};