export interface Player {
    id: number;
    name: string;
    money: number;
    level: number;
    color: string;
    position: number;
    shieldNextLoss: boolean;
    improvements: ImprovementsState;
}

export interface ImprovementsState {
    marketing: boolean;
    equipo: boolean;
    tecnologiaAvailable: boolean; // se consume
    expansionAvailable: boolean;  // se consume
}