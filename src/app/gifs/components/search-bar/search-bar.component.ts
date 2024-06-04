import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {

  @ViewChild('searchInput') public searchInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  public searchTag( ){
    const tag = this.searchInput.nativeElement.value;
    this.gifsService.addSearchTag(tag);
    this.searchInput.nativeElement.value = '';
    console.log(this.gifsService.searchHistory);
  }
 }
