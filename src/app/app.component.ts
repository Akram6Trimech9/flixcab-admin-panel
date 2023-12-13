import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from './auth/cors/services/current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _currentUserService : CurrentUserService ){}
  ngOnInit(): void {
    this._currentUserService.setCurrentUser();

 }
}
