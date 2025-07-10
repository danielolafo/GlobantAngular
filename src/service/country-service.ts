import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http : HttpClient) { }

  getCountries():Observable<any[]>{
    return this.http.get<any[]>(`${environment.mainPath}${environment.country}`);
  }
}
