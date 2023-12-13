import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';
import { BlockModalComponent } from './block-modal/block-modal.component';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.css']
})
export class BlockUserComponent implements OnInit {
  users: any[] = [];

  constructor(
    private _snackBar: MatSnackBar,
    private _users: UsersService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._users.getUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  blockUser(email: string, id: string) {
    this._users.blockUser('', id).subscribe((res) => {
      this.users = this.users.map((item: any) => {
        if (item._id === res._id) {
          item = res;
        }
        return item;
      });
    });

    this.dialog.open(BlockModalComponent, {
      data: email
    });
  }

  unBlock(id: string) {
    this._users.unBlockUser('', id).subscribe((res) => {
      this.users = this.users.map((item: any) => {
        if (item._id === res._id) {
          item = res;
        }
        return item;
      });

      this._snackBar.open('User Unblocked', 'Undo', {
        duration: 1000,
        panelClass: ['custom-snackbar']
      });
    });
  }
}
