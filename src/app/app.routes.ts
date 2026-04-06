import { Routes } from '@angular/router';
import { MenuComponent } from './features/menu/pages/menu/menu.component';
import { SettingsComponent } from './features/menu/pages/settings/settings.component';
import { GameBoardComponent } from './features/board/pages/game-board/game-board.component';
import { SetupGameComponent } from './features/setup-game/setup-game.component';
import { InstructionsComponent } from './features/menu/pages/instructions/instructions.component';

export const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'game', component: GameBoardComponent },
    { path: 'setup', component: SetupGameComponent },
    { path: 'instrucciones', component: InstructionsComponent },
    { path: 'ajustes', component: SettingsComponent },
];