import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  term: string = '';
  hasError: boolean = false;
  err = {
    status: 404,
    message: 'Not Found',
  };

  constructor(private countryService: CountryService) {}

  /**
   * search
   */
  public search(): void {
    this.hasError = false;

    this.countryService.searchCountry(this.term).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        this.hasError = true;
      }
    );
  }
}
