import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _searchHistory: string[] = [];

  private _serviceUrl: string = "https://api.giphy.com/v1/gifs"
  private apiKey: string = 'vmOJGc94QeYzNlmiY4EnaPE0FSEPXUT4';

  public gifsList: Gif[] = [];

  constructor(private http: HttpClient) { }

  get searchHistory(){
    return [...this._searchHistory];
  }

  public addSearchTag( tag: string){
    if(tag.length === 0){return}
    this.tagExists(tag);
    this.getSearchGifs(tag);
  }

  private tagExists(tag: string){
    tag = tag.toLocaleLowerCase();
    if(this._searchHistory.includes(tag)){
      this._searchHistory = this._searchHistory.filter((oldTag) => oldTag !== tag)
    }
    this._searchHistory.unshift(tag);
    this._searchHistory = this._searchHistory.slice(0, 50);
  }


  private getSearchGifs(tag: string){
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '50')
    .set('q', tag);

    this.http.get<SearchResponse>(`${this._serviceUrl}/search`, {params}).subscribe(res => {
     this.gifsList = res.data;
    });
  }

  public getInitGifs() {
    this.http.get<SearchResponse>(`${this._serviceUrl}/trending?api_key=${this.apiKey}&limit=50`).subscribe((res: SearchResponse) => {
      this.gifsList = res.data;
    })
  }
}
