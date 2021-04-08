import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/person/template/header/header.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/person/template/footer/footer.component';
import { NavComponent } from './components/person/template/nav/nav.component';

import{MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import{MatCardModule} from '@angular/material/card';
import { PersonCrudComponent } from './views/person-crud/person-crud.component';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule}from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from'@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { PersonReadComponent } from './components/person/person-read/person-read.component';
import { MatTableModule } from '@angular/material/table';
import { PersonUpdateComponent } from './components/person/person-update/person-update.component';
import { PersonDeleteComponent } from './components/person/person-delete/person-delete.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PersonFormsDialogComponent } from './views/person-forms-dialog/person-forms-dialog.component';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PersonCrudComponent,
    PersonCreateComponent,
    PersonReadComponent,
    PersonUpdateComponent,
    PersonDeleteComponent,
    PersonFormsDialogComponent,
    LocalDateTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatNativeDateModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule
    

  ],
  providers: [
    LocalDateTimePipe,
    MatDatepickerModule, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
