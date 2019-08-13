export class Movie {
    public code: string;

    constructor(public title: string, public year: number, public directors: string[]) { 
        this.code = title.toLowerCase().replace(' ', '');
    }
}