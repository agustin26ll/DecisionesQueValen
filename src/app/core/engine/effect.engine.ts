import { Player } from '../models/player.model';
import { Effect, EffectType, TargetType } from '../models/effect.model';

export class EffectEngine {

    static applyEffects(
        effects: Effect[],
        currentPlayer: Player,
        players: Player[]
    ) {
        effects.forEach(effect => {
            const targets = this.resolveTargets(effect.target, currentPlayer, players);

            targets.forEach(player => {
                this.applyEffect(effect, player);
            });
        });
    }

    private static resolveTargets(
        target: TargetType,
        current: Player,
        players: Player[]
    ): Player[] {

        switch (target) {
            case TargetType.SELF:
                return [current];

            case TargetType.ONE_OPPONENT:
                const opponents = players.filter(p => p.id !== current.id);
                return [opponents[Math.floor(Math.random() * opponents.length)]];

            case TargetType.ALL_OPPONENTS:
                return players.filter(p => p.id !== current.id);
        }
    }

    private static applyEffect(effect: Effect, player: Player) {
        switch (effect.type) {

            case EffectType.MONEY:
                this.applyMoney(effect.value!, player);
                break;

            case EffectType.MOVE:
                player.position += effect.value!;
                break;

            case EffectType.REPEAT_TURN:
                // lo manejará turn.engine
                break;

            case EffectType.SHIELD_NEXT_LOSS:
                player.shieldNextLoss = true;
                break;

            case EffectType.LEVEL_UP:
                player.level++;
                break;
        }
    }
    
    private static applyMoney(amount: number, player: Player) {

        // escudo contra pérdidas
        if (amount < 0 && player.shieldNextLoss) {
            player.shieldNextLoss = false;
            return;
        }

        // mejora equipo reduce pérdidas
        if (amount < 0 && player.improvements.equipo) {
            amount *= 0.5;
        }

        // mejora marketing aumenta ganancias
        if (amount > 0 && player.improvements.marketing) {
            amount *= 1.5;
        }

        player.money += amount;

        if (player.money < 0) player.money = 0;
    }
}