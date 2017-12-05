import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from './data.service';
import {HttpClientModule}  from '@angular/common/http';
//import {JsonHolderUsersColumn} from './app.data';



import { AppComponent } from './app.component';
import 'datatables.net';
import 'datatables.net-bs';
import 'datatables.net-buttons';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
