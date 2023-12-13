import { Component, Input, OnInit } from '@angular/core';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Input() id!: string;
  selectedFiles?: FileList;
  message: string[] = [];
  previews: string[] = [];

  constructor(private uploadService: FilesService) {}

  selectFiles(event: any): void {
    this.message = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  ngOnInit(): void {
    // this.imageInfos = this.uploadService.getFiles();
  }

  upload(id: string, files: FileList): void {
    this.uploadService.upload(files, id).subscribe(res => {
      console.log(res);
    });
  }

  uploadFiles(): void {
    this.message = [];
    if (this.selectedFiles) {
      this.upload(this.id, this.selectedFiles);
    }
  }
}
