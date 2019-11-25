import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentValue = 0;

  increment(): void {
    this.currentValue += 1;
  }

  decrement(): void {
    this.currentValue -= 1;
  }
}
