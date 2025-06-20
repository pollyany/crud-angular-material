import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado, Municipio } from './brasilapi.modules';

@Injectable({
  providedIn: 'root'
})
export class BrasilapiService {
  baseUrl = 'https://brasilapi.com.br/api';
  ufsUrl = `${this.baseUrl}/ibge/uf/v1`;
  municipiosUrl = `${this.baseUrl}/ibge/municipios/v1`;

  constructor(private http: HttpClient) { }

  listarUfs() : Observable<Estado[]> {
    return this.http.get<Estado[]>(this.ufsUrl);
  }

  listarMunicipios(uf: string): Observable<Municipio[]> {
    const url = `${this.municipiosUrl}/${uf}`;
    return this.http.get<Municipio[]>(url);
  }
}
