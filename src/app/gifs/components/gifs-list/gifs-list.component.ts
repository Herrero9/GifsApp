import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.scss',
})
export class GifsListComponent { 
  @Input() gifsList: Gif[] = [];

  constructor(){}
}
