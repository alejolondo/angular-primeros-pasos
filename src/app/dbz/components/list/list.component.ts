import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{id: '', name: 'Krillin',power: 20  }]

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{
    //TODO emitir el ID del personaje
   if(!id) return;
    this.onDeleteId.emit(id);

  }
}
