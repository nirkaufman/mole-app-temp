import { Component, OnInit } from '@angular/core';
import {GameService} from './game.service';

@Component({
  selector: 'ml-game',
  template: `
    <div id="game">
      <ml-header (click)="game.startGame()"></ml-header>
      <ml-lawn [holes]="game.holes"></ml-lawn>
    </div>
  `,
  styles: [`
    #game {
      background-color: green;
      width: 100%;
      height: 750px;
      position: fixed;
    }
  `]
})
export class GameComponent {
  public game: GameService;

  constructor(game: GameService) {
    this.game = game;
  }


}
