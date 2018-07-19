import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PetsComponent } from './pets/pets.component';
import { PetsDetailComponent } from './pets-detail/pets-detail.component';
import { PetsRegisterComponent } from './pets-register/pets-register.component';
import { AboutComponent } from './about/about.component';
import { PetsMyComponent } from './pets-my/pets-my.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: IndexComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'pets-detail', component: PetsDetailComponent },
  { path: 'pets-register', component: PetsRegisterComponent },
  { path: 'pets-my', component: PetsMyComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
