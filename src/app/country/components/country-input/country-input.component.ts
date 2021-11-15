import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent {
  @Output()
  onEnter: EventEmitter<string> = new EventEmitter();

  termInput: string = '';

  constructor() {}

  public search() {
    this.onEnter.emit(this.termInput);
  }
}
