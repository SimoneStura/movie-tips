import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieList: Movie[] = [
    new Movie('Dersu Uzala', 1975, ['Akira Kurosawa']),
    new Movie('Star Wars', 1977, ['George Lucas']),
    new Movie('Once Upon a Time in America', 1984, ['Sergio Leone'])
  ];

  constructor() { }

  ngOnInit() {
  }

}
