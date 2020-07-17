import { Component, OnInit } from '@angular/core';
import {UserService } from '../user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Dashs: any[] = []
  title = 'Ricardo Ernesto Maza Miranda'

  constructor(protected userService:UserService) { }

  ngOnInit(): void {
    this.userService.getDash()
    .subscribe(
      (data) => {//Succes osea respuesta
        this.Dashs = data['results']
      },
      (error) => {
        console.error(error)
      }
    )
  }

}
