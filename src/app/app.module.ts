import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BASE_URL_PROVIDER } from './interceptor/base.interceptor';
import { LoginGuard } from './auth/cors/guards/login-guard.guard';
import { CurrentUserService } from './auth/cors/services/current-user.service';
import { TokenInterceptor, TOKEN_PROVIDER } from './auth/cors/interceptor/token/token.interceptor';
import { ProductsModule } from './views/products/products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LayoutModule,
    HttpClientModule, 
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [BASE_URL_PROVIDER ,
    TOKEN_PROVIDER,
    LoginGuard , CurrentUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
