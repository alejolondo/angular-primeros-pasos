import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  imports: [
    CommonModule],
  exports: [
    HeroComponent,
    ListaComponent],
  declarations: [
    HeroComponent,
    ListaComponent
  ]
})
export class HeroModule { }
