import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.scss',
})
export class GifsCardComponent {
  @Input() gif: Gif | undefined;

  constructor(){}
 }
