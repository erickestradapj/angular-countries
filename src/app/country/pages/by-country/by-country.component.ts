import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];
  countriesSuggestions: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  public search(termInput: string): void {
    this.showSuggestions = false;
    this.hasError = false;

    this.countryService.searchCountry(termInput).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error) => {
        this.hasError = true;
        this.countries = [];
      }
    );
  }

  public suggestions(termInput: string) {
    this.hasError = false;
    this.term = termInput;
    this.showSuggestions = true;

    this.countryService.searchCountry(termInput).subscribe(
      (countries) => (this.countriesSuggestions = countries.splice(0, 5)),
      (err) => (this.countriesSuggestions = [])
    );
  }
}
