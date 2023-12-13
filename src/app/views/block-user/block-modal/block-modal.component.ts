// block-modal.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailTsService } from 'src/app/services/email.ts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-block-modal',
  templateUrl: './block-modal.component.html',
  styleUrls: ['./block-modal.component.css']
})
export class BlockModalComponent implements OnInit {
  emailForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private emailService: EmailTsService,
    private _snackBar: MatSnackBar,
    private _userService :UsersService,
    public dialogRef: MatDialogRef<BlockModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.emailForm = this.formbuilder.group({
      subject: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  sendEmail() {
    if (this.emailForm.valid) {
      const record = {
        message: this.emailForm.value.message,
        subject: this.emailForm.value.subject,
        email: this.data
      };

      this.emailService.sendEmail(record).subscribe(res => {
        this._snackBar.open('Email sent successfully', 'Close', {
          duration: 1000
        });
        this.dialogRef.close(); 
      });
    }
  }

  onCancel() {
    this.dialogRef.close();  
  }
}
