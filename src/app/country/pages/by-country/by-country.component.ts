import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  term: string = 'hello world';

  constructor() {}

  /**
   * search
   */
  public search() {
    console.log(this.term);
  }
}
