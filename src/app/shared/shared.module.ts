import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material-module';
import { UploadComponent } from './upload/upload.component';
 


@NgModule({
  declarations: [
    TopNavComponent,
    SidebarNavComponent,
    FooterComponent,
    UploadComponent,
   ],
  imports: [
    CommonModule ,
    RouterModule,
    MaterialModule
  ],
  exports:[
    TopNavComponent,
    UploadComponent,
    SidebarNavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
