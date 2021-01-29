import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '.././app-routing.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import {   HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Auth } from './services/auth';
import { AuthInterceptor } from './services/auth-interceptor';
import { ChunkHandlerService } from './services/chunk-handler.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  
    HttpClientModule,
    MatSnackBarModule
    
  ],
  exports: [
    MainLayoutComponent,
    MatSnackBarModule
  ],
  providers: [ Auth, {provide:HTTP_INTERCEPTORS ,useClass: AuthInterceptor,multi:true},{provide:ErrorHandler, useClass:ChunkHandlerService}]
})
export class CoreModule { }
