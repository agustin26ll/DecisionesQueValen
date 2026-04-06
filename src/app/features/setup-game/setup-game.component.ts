
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GameService } from '../../core/service/game.service';

interface SetupPlayer {
  name: string;
  color: string;
}

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.component.html',
  styleUrls: ['./setup-game.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class SetupGameComponent {

  colors = ['#FFC107', '#2E7D32', '#D32F2F', '#42A5F5', '#AB47BC'];

  numberOfPlayers = 3;
  players: SetupPlayer[] = [];
  submitted = false;

  constructor(private gameService: GameService, private router: Router) {
    this.generatePlayers(3);
  }

  ngOnInit() {
    if (this.gameService.hasSavedGame()) {
      this.router.navigateByUrl('/game');
    }
  }

  generatePlayers(n: number) {
    this.players = Array.from({ length: n }, (_, i) => ({
      name: '',
      color: this.colors[i]
    }));
  }

  selectPlayers(n: number) {
    this.numberOfPlayers = n;
    this.generatePlayers(n);
  }

  isValid() {
    return this.players.every(p => p.name.trim().length >= 3);
  }

  startGame() {
    this.submitted = true;
    if (!this.isValid()) return;

    const data = this.players.map(p => ({
      name: p.name.trim(),
      color: p.color
    }));

    this.gameService.startGame(data);
    this.router.navigate(['/game']);
  }
}