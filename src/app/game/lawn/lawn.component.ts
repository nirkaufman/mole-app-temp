import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-lawn',
  template: `      
      <ml-hole></ml-hole>
      <ml-hole></ml-hole>
      <ml-hole></ml-hole>
      <ml-hole></ml-hole>
  `,
  styleUrls: ['./lawn.component.css']
})
export class LawnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
