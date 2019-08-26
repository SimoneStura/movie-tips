import { Movie } from './movie.model';

export class SimpleDataSource {
    private data: Movie[];

    constructor() {
        this.data = new Array<Movie>(
            new Movie('Dersu Uzala', 1975, ['Akira Kurosawa'], 1),
            new Movie('Star Wars', 1977, ['George Lucas'], 2),
            new Movie('Once Upon a Time in America', 1984, ['Sergio Leone'], 3)
        );
    }

    getData(): Movie[] {
        return this.data;
    }
}