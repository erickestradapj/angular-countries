import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  listRegions: string[] = ['africa', 'americas', 'asia', 'europe', ' oceania'];
  activeRegion: string = '';
  regions: Country[] = [];

  constructor(private countryService: CountryService) {}

  public getClassCSS(region: string) {
    return region === this.activeRegion
      ? 'btn btn-primary me-2'
      : 'btn btn-outline-primary me-2';
  }

  public btnRegion(reg: string): void {
    if (reg === this.activeRegion) {
      return;
    }

    this.regions = [];
    this.activeRegion = reg;
    this.countryService.searchRegion(reg).subscribe((regions) => {
      this.regions = regions;
    });
  }
}
