import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get(`${this.baseUrl}\customers`);
  }
}
