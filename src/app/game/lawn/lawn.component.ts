import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Hole} from '../hole';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
