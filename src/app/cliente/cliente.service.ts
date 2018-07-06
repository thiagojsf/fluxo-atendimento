import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly url: string = 'https://treinamento-505d8.firebaseio.com/lista.json';

  constructor(private http: HttpClient) { }

  getClientes() : Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url);
  }

  addCliente(cliente: Pessoa) {
    return this.http.post(this.url, cliente);
  }

}
