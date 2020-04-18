import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { PetsDetailComponent } from './pets-detail/pets-detail.component';
import { PetsRegisterComponent } from './pets-register/pets-register.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PetsMenuComponent } from './shared/pets-menu/pets-menu.component';

import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { UserComponent } from './user/user.component';
import { PetsMyComponent } from './pets-my/pets-my.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetsDetailComponent,
    PetsRegisterComponent,
    IndexComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    SidebarComponent,
    PetsMenuComponent,
    UserComponent,
    PetsMyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
