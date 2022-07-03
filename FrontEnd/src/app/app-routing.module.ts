import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud/crud.component';
import { DisplayuserComponent } from './displayuser/displayuser/displayuser.component';
import { LoginComponent } from './login/login.component';
import { RegisteruserComponent } from './registeruser/registeruser/registeruser.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateuserComponent } from './updateuser/updateuser/updateuser.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'display',component:DisplayuserComponent},
  {path:'update/:id',component:UpdateuserComponent},
  {path:'crud',component:CrudComponent},
  {path:'save',component:RegisteruserComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'**',redirectTo:'welcome',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
