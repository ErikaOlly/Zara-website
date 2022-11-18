import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side menu/side-menu.component';
import { SupportModule } from './support/support.module';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SupportModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
