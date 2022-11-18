import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side menu/side-menu.component';
import { SupportModule } from './support/support.module';

import {LoginModule} from './login/login.module';

@NgModule({
  // Qui importo solo i componenti
  declarations: [
    AppComponent,
    SideMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
    AppRoutingModule,
    SupportModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
