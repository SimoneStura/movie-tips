import { SimpleDataSource } from './datasource.model';
import { Movie } from './movie.model';

export class Model {
    private dataSource: SimpleDataSource;
    private movies: Movie[];
    private maxID = -1;

    private locator = (m: Movie, id: number) => m.id == id;

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.dataSource.getData().forEach(p => {
            this.movies.push(p);
            this.maxID = Math.max(this.maxID, p.id);
        });
    }

    getMovies(): Movie[] {
        return this.movies;
    }

    getMovie(id: number): Movie {
        return this.movies.find(p => this.locator(p, id));
    }

    saveMovie(movie: Movie) {
        if (movie.id == 0 || movie.id == null) {
            movie.id = this.generateID();
            this.movies.push(movie);
        } else {
            let index = this.movies.findIndex(m => this.locator(m, movie.id));
            this.movies.splice(index, 1, movie);
        }
    }

    deleteMovie(id: number) {
        let index = this.movies.findIndex(m => this.locator(m, id));
        if (index > -1) {
            this.movies.splice(index, 1);
        }
    }

    private generateID(): number {
        this.maxID++;
        return this.maxID;
    }
}