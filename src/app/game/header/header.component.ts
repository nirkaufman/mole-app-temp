import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-header',
  template: `
    <header><img src="/assets/header.png"></header>

    <div id="hud">
      <div id="time">30</div>
      <div id="score">100</div>
    </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
