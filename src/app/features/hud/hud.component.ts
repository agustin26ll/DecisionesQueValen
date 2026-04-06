import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Player } from '../../core/models/player.model';

@Component({
  selector: 'app-hud',
  templateUrl: './hud.component.html',
  imports: [CurrencyPipe],
  styleUrls: ['./hud.component.scss'],
  standalone: true
})
export class HudComponent {

  @Input() currentPlayer!: Player;
}