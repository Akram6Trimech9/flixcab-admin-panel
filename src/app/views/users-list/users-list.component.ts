import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
 users : any[]=[]
  constructor(private _users: UsersService){}
ngOnInit(): void {
  this._users.getUsers().subscribe({
    next:(res)=>{
      this.users = res
    },
    error:(error)=>{ 
  console.log(error)
    }
  })
}
}
