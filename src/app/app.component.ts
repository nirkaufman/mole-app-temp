import { Component } from '@angular/core';

@Component({
  selector: 'ml-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'ml works!';
}
