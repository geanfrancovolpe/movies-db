import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularMovies:any = {
    results: []
  };

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(){
    this._movieService.getPopularMovies()
      .subscribe((value:any) => {
        this.popularMovies = value;
      });
  }

}
