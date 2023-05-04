import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
public heroeNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
public deteledHeroe?: string;
removeLastHeroe(): void{

  this.deteledHeroe = this.heroeNames.pop();
}

}
