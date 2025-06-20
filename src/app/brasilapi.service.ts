import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from './brasilapi.modules';

@Injectable({
  providedIn: 'root'
})
export class BrasilapiService {
  baseUrl = 'https://brasilapi.com.br/api';
  ufsUrl = `${this.baseUrl}/ibge/v2/estados`;
  municipiosUrl = `${this.baseUrl}/ibge/v2/municipios`;

  constructor(private http: HttpClient) { }

  listarUfs() : Observable<Estado[]> {
    return this.http.get<Estado[]>(this.ufsUrl);
  }
}
