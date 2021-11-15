import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  term: string = '';
  hasError: boolean = false;
  capitals: Country[] = [];

  constructor(private countryService: CountryService) {}

  public search(termInput: string): void {
    this.hasError = false;

    this.countryService.searchCapital(termInput).subscribe(
      (capitals) => {
        this.capitals = capitals;
      },
      (error) => {
        this.hasError = true;
        this.capitals = [];
      }
    );
  }

  public suggestions(termInput: string) {
    this.hasError = false;
    // TODO: Create suggestions
  }
}
