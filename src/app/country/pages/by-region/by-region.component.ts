import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  term: string = '';
  hasError: boolean = false;
  regions: Country[] = [];

  constructor(private countryService: CountryService) {}

  public search(termInput: string): void {
    this.hasError = false;

    this.countryService.searchRegion(termInput).subscribe(
      (regions) => {
        this.regions = regions;
      },
      (error) => {
        this.hasError = true;
        this.regions = [];
      }
    );
  }

  public suggestions(termInput: string) {
    this.hasError = false;
    // TODO: Create suggestions
  }
}
