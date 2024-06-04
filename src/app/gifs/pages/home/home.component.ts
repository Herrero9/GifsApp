import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'app-home',  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  
  constructor(private _gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this._gifsService.gifsList;
  }
  
 }
