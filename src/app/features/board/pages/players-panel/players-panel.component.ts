import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../../../core/service/game.service';

@Component({
  selector: 'app-players-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players-panel.component.html',
  styleUrl: './players-panel.component.css'
})

export class PlayersPanelComponent {
  constructor(public game: GameService) { }

}
