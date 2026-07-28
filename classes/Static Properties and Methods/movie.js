class Movie{
    constructor(title,rating){
        this.title=title;
        this.rating=rating;
    }
    static compareMovies(movieA,movieB){
        if(movieA.rating>movieB.rating){
            console.log(`${movieA.title} has a higher rating.`);
        }else if(movieA.rating<movieB.rating){
            console.log(`${movieB.title} has a higher rating.`);
        }else{
            console.log(`${movieA.title} and ${movieB.title} have the same rating.`);
        }
    }

}

let movie1=new Movie("Inception",8.8);
let movie2=new Movie("The Dark Knight",9.0);
Movie.compareMovies(movie1,movie2);
console.log(movie1.title);
console.log(movie2.title);
