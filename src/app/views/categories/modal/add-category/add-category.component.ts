import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA  ,  } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent  implements OnInit{
 categoryForm!: FormGroup

 constructor(private formbuilder : FormBuilder ,public dialogRef: MatDialogRef<AddCategoryComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any){}
 ngOnInit(): void {
      this.categoryForm = this.formbuilder.group({ 
        title :['',[Validators.required,
        Validators.minLength(2)]
        ],
        descripiton :['',[Validators.required,
          Validators.minLength(2)]
          ]
      })
 }
 get f(): { [key: string]: AbstractControl } {
  return this.categoryForm.controls;
}
onSubmit(): void {
  if (this.categoryForm.valid) {
    const title = this.categoryForm.value.title;
    const descripiton = this.categoryForm.value.descripiton ; 
     const data = { 
       title : title, 
       descripiton: descripiton 
     }
    this.dialogRef.close(data); 
  }
}
onCancel(): void {
  this.dialogRef.close();  
}
}
