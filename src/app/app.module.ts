import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DummyComponent } from './dummy/dummy.component';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    DummyComponent,
    TableComponent,
     // all new components have to bedeclared and imported
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

