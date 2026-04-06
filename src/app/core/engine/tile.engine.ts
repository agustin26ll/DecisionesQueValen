import { BOARD_POSITIONS } from "../config/board.config";
import { Player } from "../models/player.model";
import { EffectEngine } from "./effect.engine";

export class TileEngine {

    static resolveTile(player: Player, players: Player[]) {

        const tile = BOARD_POSITIONS[player.position % BOARD_POSITIONS.length];

        switch (tile.effect) {

            case 'start':
                player.money += tile.amount!;
                break;

            case 'gain':
                EffectEngine.applyEffects(
                    [{ type: 0, target: 0, value: tile.amount }],
                    player,
                    players
                );
                break;

            case 'lose':
                EffectEngine.applyEffects(
                    [{ type: 0, target: 0, value: -tile.amount! }],
                    player,
                    players
                );
                break;

            case 'allLose':
                EffectEngine.applyEffects(
                    [{ type: 0, target: 2, value: -tile.amount! }],
                    player,
                    players
                );
                break;

            case 'othersLose':
                EffectEngine.applyEffects(
                    [{ type: 0, target: 2, value: -tile.amount! }],
                    player,
                    players
                );
                break;

            case 'attack':
                // luego implementamos ataque
                break;

            case 'finish':
                alert("FIN DEL JUEGO");
                break;

            case 'card':
                return "CARD"; // 👈 IMPORTANTE
        }

        return "END_TURN";
    }
}