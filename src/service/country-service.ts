import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  mainPath = environment.mainPath;
  countryAll = environment.countryAll;

  constructor(private http : HttpClient) { }

  getCountries():Observable<any[]>{
    return this.http.get<any[]>(`${this.mainPath}${this.countryAll}`);
  }
}
