import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 500
  },{
    id: uuid(),
    name: "Goku",
    power: 9000
  },{
    id: uuid(),
    name: "Vegueta",
    power: 8000
  }

  ];

  newCharacter(character : Character):void {

    const newCharacter: Character = {id: uuid(), ...character}
    this.characters.push(newCharacter);
    console.log(this.characters);
  }

  // deleteId(index: number): void{
  //   this.characters.splice(index,1);
   deleteById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
   }

}
