import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class ApiService { 


  constructor(private http: HttpClient) { }

  login(user: Usuario){
    return this.http.post('http://localhost:3000/login', user);
  }
  lista(){
    return this.http.get('http://localhost:3000/getAll');
  }

}
