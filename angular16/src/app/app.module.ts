import { NgModule ,OnInit,ViewChild} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';


@NgModule({
  declarations: [
    AppComponent,
    UserdisplayComponent,
 

     
   
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
MatIconModule,
MatChipsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
 

    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
