import { Component } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent {
  term: string = '';

  constructor() {}

  public search() {
    console.log('Hello world');
    console.log(this.term);
  }
}
