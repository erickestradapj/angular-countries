import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  public get httpParams() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  public searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  public searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  public searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  public getCountryByCode(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }
}
