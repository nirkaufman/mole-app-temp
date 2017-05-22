import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-game',
  template: `
    <div id="game">
      <ml-header></ml-header>
      <ml-lawn></ml-lawn>
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
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
