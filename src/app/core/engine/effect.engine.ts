import { Player } from '../models/player.model';
import { Effect, EffectType, TargetType } from '../models/effect.model';

export class EffectEngine {

    static applyEffects(
        effects: Effect[],
        currentPlayer: Player,
        players: Player[]
    ) {
        console.log("🃏 Aplicando efectos:", effects);

        effects.forEach(effect => {
            const targets = this.resolveTargets(effect.target, currentPlayer, players);
            console.log("🎯 Targets:", targets.map(t => t.id));

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

        console.log(`⚡ Efecto ${EffectType[effect.type]} a jugador ${player.id}`, effect);

        switch (effect.type) {

            case EffectType.MONEY:
                this.applyMoney(effect.value!, player);
                break;

            case EffectType.MOVE:
                player.position += effect.value!;
                console.log(`📍 Nueva posición: ${player.position}`);
                break;

            case EffectType.REPEAT_TURN:
                console.log("🔁 Turno extra otorgado");
                break;

            case EffectType.SHIELD_NEXT_LOSS:
                player.shieldNextLoss = true;
                console.log("🛡 Escudo activado");
                break;

            case EffectType.LEVEL_UP:
                player.level++;
                console.log(`⬆ Nivel nuevo: ${player.level}`);
                break;
        }
    }

    private static applyMoney(amount: number, player: Player) {

        const originalAmount = amount;

        if (amount < 0 && player.shieldNextLoss) {
            console.log("🛡 Escudo bloqueó pérdida");
            player.shieldNextLoss = false;
            return;
        }

        if (amount < 0 && player.improvements.equipo) {
            amount *= 0.5;
            console.log("🧰 Equipo reduce pérdida 50%");
        }

        if (amount > 0 && player.improvements.marketing) {
            amount *= 1.5;
            console.log("📢 Marketing aumenta ganancia 50%");
        }

        player.money += amount;
        if (player.money < 0) player.money = 0;

        console.log(`💰 ${originalAmount} → aplicado ${amount} → total ${player.money}`);
    }
}