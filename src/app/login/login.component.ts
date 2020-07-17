import { Component, OnInit } from '@angular/core';
import {UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any[] = []
  title = 'Ricardo Ernesto Maza Miranda'

  constructor(protected userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser()
    .subscribe(
      (data) => {//Succes osea respuesta
        this.users = data['results']
      },
      (error) => {
        console.error(error)
      }
    )
  }

}
