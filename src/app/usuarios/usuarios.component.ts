import { Component, OnInit } from '@angular/core';
import {UserService } from '../user.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  Usuar: any[] = []
  title = 'Ricardo Ernesto Maza Miranda'

  constructor(protected userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsuario()
    .subscribe(
      (data) => {//Succes osea respuesta
        this.Usuar = data['results']
      },
      (error) => {
        console.error(error)
      }
    )
  }

}
