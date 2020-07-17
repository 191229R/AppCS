import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(protected http: HttpClient) { }

  getUser(){
    return this.http.get('https://randomuser.me/api/?results=10');
  }
  getDash(){
    return this.http.get('https://randomuser.me/api/?results=100');
  }
  getUsuario(){
    return this.http.get('https://randomuser.me/api/?results=300');
  }
}
