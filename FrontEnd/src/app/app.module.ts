import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { VtButtonModule } from '@onetrust/vitreus/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { RegisteruserComponent } from './registeruser/registeruser/registeruser.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './crud/crud/crud.component';
import { UpdateuserComponent } from './updateuser/updateuser/updateuser.component';
import { DisplayuserComponent } from './displayuser/displayuser/displayuser.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatCardModule } from '@angular/material/card';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { GetuserDialogComponent } from './getuser-dialog/getuser-dialog.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    RegisteruserComponent,
    CrudComponent,
    UpdateuserComponent,
    DisplayuserComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    DialogComponent,
    GetuserDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// RouterModule.forRoot([
//   {path:'update',component:UpdateuserComponent},
//   {path:'crud',component:CrudComponent},
//   {path:'save',component:RegisteruserComponent},
//   {path:'welcome',component:WelcomeComponent},
//   {path:'',redirectTo:'welcome',pathMatch:'full'},
//   {path:'**',redirectTo:'welcome',pathMatch:'full'}
// ])
