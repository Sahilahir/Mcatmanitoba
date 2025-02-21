import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// ...existing imports...

@NgModule({
  declarations: [
    // ...existing declarations...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: []
})
export class AppModule { }
