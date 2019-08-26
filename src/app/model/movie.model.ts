export class Movie {
    public code: string;

    constructor(
        public title: string,
        public year: number,
        public directors: string[],
        public id?: number) {
        this.code = title.toLowerCase().replace(' ', '') + year;
    }
}