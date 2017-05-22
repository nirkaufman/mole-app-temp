import {Component, Input} from '@angular/core';
import {Hole} from '../hole';

@Component({
  selector: 'ml-lawn',
  template: `      
      <ml-hole *ngFor="let hole of holes" [hole]="hole"></ml-hole>
  `,
  styleUrls: ['./lawn.component.css']
})
export class LawnComponent  {

  @Input()
  public holes: Hole[];


}
