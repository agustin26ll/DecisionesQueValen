import { Component, Input } from '@angular/core';
import { Player } from '../../core/models/player.model';
import { GameService } from '../../core/service/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hud.component.html',
  styleUrl: './hud.component.css',
})
export class HudComponent {

  @Input() currentPlayer?: Player;

  time = '00:00:00';
  interval!: any;

  constructor(public game: GameService) { }

  ngOnInit() {
    this.interval = setInterval(() => this.updateTimer(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  updateTimer() {
    const diff = Date.now() - this.game.startTime;

    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    this.time =
      this.pad(hours) + ':' +
      this.pad(minutes) + ':' +
      this.pad(seconds);
  }

  pad(n: number) {
    return n.toString().padStart(2, '0');
  }
}