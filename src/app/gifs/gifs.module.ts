import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GifsListComponent } from './components/gifs-list/gifs-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    SearchBarComponent,
    GifsListComponent,
    GifsCardComponent
  ]
})
export class GifsModule { }
