import {Component, OnInit, Input} from '@angular/core';
import {Hole} from "../hole";

@Component({
  selector: 'ml-hole',
  template: `
    <div class="hole" [ngClass]="hole.state" ></div>
  `,
  styleUrls: ['./hole.component.css']
})
export class HoleComponent  {

  @Input()
  public hole: Hole;



}
