class Movie {
    constructor(title) {
        this.title = title;
    }

    plot() {
        return "No plot here";
    }

    get name() {
        return this.title;
    }
}

class ET extends Movie {
    constructor() {
        super("ET");
    }

    //We would expect 'plot' to be inherited but we use 'overriding' to create a new plot function for this particular class
    plot() {
        return "Cute alien takes over the earth";
    }
}

class StarWars extends Movie {
    constructor() {
        super("Star Wars");
    }

    plot() {
        return "The Force beats everything";
    }
}

class JurassicPark extends Movie {
    constructor() {
        super("Jurassic Park");
    }

    plot() {
        return "Dinosaurs once again rule the earth";
    }
}

//notice no 'plot' declaration; this will result in the plot method from the initial class to be provided
class AwfulMovies extends Movie {
    constructor() {
        super("Awful Movie");
    }
}

function selectMovie() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;  //review: Math.floor() rounds down to the closest whole number

    switch(randomNumber) {
        case 1:
            return new ET();
        break;

        case 2:
            return new StarWars();
        break;

        case 3:
            return new JurassicPark();
        break;

        case 4:
            return new AwfulMovies();
        break;  //don't need this break but adding it for consistency
    }
}

//iterate through the loop ten times
for(let i = 0; i < 10; i++) {
    let movie = selectMovie();
    console.log(movie.name + " is about " + movie.plot());
}