import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { RouterModule } from '@angular/router';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Theme1PageComponent } from './pages/Theme/theme1-page/theme1-page.component';
import { Theme2PageComponent } from './pages/Theme/theme2-page/theme2-page.component';
import { Theme3PageComponent } from './pages/Theme/theme3-page/theme3-page.component';
import { Theme4PageComponent } from './pages/Theme/theme4-page/theme4-page.component';
import { Theme5PageComponent } from './pages/Theme/theme5-page/theme5-page.component';
import { Theme6PageComponent } from './pages/Theme/theme6-page/theme6-page.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';
import { Theme7PageComponent } from './pages/Theme/theme7-page/theme7-page.component';
import { Theme8PageComponent } from './pages/Theme/theme8-page/theme8-page.component';
import { Theme9PageComponent } from './pages/Theme/theme9-page/theme9-page.component';

const routes = [
  // {path: '', component: MainPageComponent},
  {path: '', component: SignInPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'Home', component: HomePageComponent},
  {path: 'Home-admin', component: HomeAdminComponent},
  {path: 'theme1', component: Theme1PageComponent},
  {path: 'theme2', component: Theme2PageComponent},
  {path: 'theme3', component: Theme3PageComponent},
  {path: 'theme4', component: Theme4PageComponent},  
  {path: 'theme5', component: Theme5PageComponent},  
  {path: 'theme6', component: Theme6PageComponent},
  {path: 'theme7', component: Theme7PageComponent},
  {path: 'theme8', component: Theme8PageComponent},
  {path: 'theme9', component: Theme9PageComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RegistrationPageComponent,
    SignInPageComponent,
    Theme1PageComponent,
    Theme2PageComponent,
    Theme6PageComponent,
    Theme3PageComponent,
    Theme5PageComponent,
    Theme4PageComponent,
    HomeAdminComponent,
    DynamicFormComponent,
    Theme7PageComponent,
    Theme8PageComponent,
    Theme9PageComponent,
    ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
