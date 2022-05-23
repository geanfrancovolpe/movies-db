import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  /**
   * Global vars
   */
  apiBase: string = "https://api.themoviedb.org/3/movie/popular";

  /**
   * Constructor 
   * @param _http 
   */
  constructor(
    private _http : HttpClient
  ) {}

  /**
   * Global methods
   */
  getPopularMovies(): any{
    return this._http.get(`${ this.apiBase }?api_key=8317cfba8ad41a7bd81c95444054d596&language=es-ES`);
  }
}
