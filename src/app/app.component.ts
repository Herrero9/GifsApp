import { Component } from '@angular/core';
import { GifsService } from './gifs/services/gifs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GifsApp';

  constructor(private _gifsService: GifsService) {}  

  ngOnInit() {
      this._gifsService.getInitGifs();
  }

}
