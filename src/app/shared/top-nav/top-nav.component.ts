import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/cors/services/auth.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements  OnInit{
  constructor( private _auth: AuthService , private _router: Router){}
  logout(){ 
     this._auth.logout().subscribe((res:any)=> { 
           this._router.navigateByUrl('/login')
      })
  }
  ngOnInit(): void {
      this._auth.getUserInfo().subscribe((res)=> { 
        console.log('hey ', res)
      })
  }
}
