import { Component } from '@angular/core';

@Component({
  selector: 'app-f1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.css'],
})
export class F1Component {
  hora = Date.now();
  Vamos() {
    this.hora = Date.now();
  }
}
