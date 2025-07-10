import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  basePath = environment.mainPath;
  getCitiesUrl = environment.city.getAll;

  constructor(private http : HttpClient) { }

  getCities(): Observable<any[]>{
    return this.http.get<any[]>(`${this.basePath}${this.getCitiesUrl}`);
  }
}
