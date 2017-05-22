export class Hole {
  public state: string;

  constructor() {
    this.state = '';
  }

  public hit() {
    if (this.state === 'up') {
      this.state = 'hit';
      setTimeout(() => this.state = '', 500);
    }
  }
}
