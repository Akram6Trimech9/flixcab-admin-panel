// update-category.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  categoryForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formbuilder.group({
      title: [this.data.title, [Validators.required, Validators.minLength(2)]],
      description: [this.data.description, [Validators.required, Validators.minLength(2)]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.categoryForm.controls;
  }

  onSubmit(): void {
    const title = this.categoryForm.value.title;
    const description = this.categoryForm.value.description;

    if (title || description) {
      const data = {
        title: title,
        description: description
      };

      this.dialogRef.close(data);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
