import { inject } from '@angular/core';
import { GameService } from '../service/game.service';
import { CanActivateFn, Router } from '@angular/router';

export const gameGuard: CanActivateFn = () => {
  const game = inject(GameService);
  const router = inject(Router);

  if (!game.hasSavedGame()) {
    router.navigateByUrl('/');
    return false;
  }

  return true;
};