import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({

  imports:[ BrowserModule ],

  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
