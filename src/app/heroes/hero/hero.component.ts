import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name: string = 'iroman';
public age : number = 45;

get capitalizedName():string {
 return this.name.toUpperCase();
}

heroeDescription(): string{
  return `${this.name} - ${this.age}`;
}

chageHeroe():void{
  this.name = 'Spiderman';
}

changeAge():void{
  this.age = 23;
}

reset(): void{
  this.name = 'ironman';
  this.age = 45;
}



}
