import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChoiceComponent } from './choice/choice.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { PresetsComponent } from './presets/presets.component';
import { HelpButtonComponent } from './help-button/help-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChoiceComponent,
    BackButtonComponent,
    PresetsComponent,
    HelpButtonComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
