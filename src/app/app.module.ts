import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    HeroModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
