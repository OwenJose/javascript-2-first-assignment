
// lots of movies.....
let movies = [
{
	title: "braveheart",
	releaseyear: 1995,
	genre: ["krig","drama"],
	rating: [10,9,8,6,10]
},
{
	title: "nyckeln till frihet",
	releaseyear: 1994,
	genre: ["kriminal","drama"],
	rating: [9,8,4,8,10,9,10]	
},
{
	title: "schindlers list",
	releaseyear: 1993,
	genre: ["historia","drama","biografi"],
	rating: [10,6,3,8,5,8,9]	
},
{
	title: "sagan om ringen triologin",
	releaseyear: 2003,
	genre: ["äventyr","drama","fanatsy"],
	rating: [10,8,6,9,9,8,8,]	
},
{
	title: "gökboet",
	releaseyear: 1975,
	genre: ["drama"],
	rating: [8,7,6,3,5,2,9]	
},
{
	title: "inception",
	releaseyear:2010,
	genre: ["krig","drama"],
	rating: [8,9,10,7,8,9,8,9]	
},
{
	title: "interstellar",
	releaseyear: 2014,
	genre: ["äventyr","drama","sci-fi"],
	rating: [10,9,8,6,10]
},
{
	title: "psycho",
	releaseyear: 1960,
	genre: ["skräck","thriller"],
	rating: [10,10,10,9,8,10]	
},
];

// this is a constructor... kind of??
function addMovie(title,year,...genre){
	// objekt literal? felt naturally for me.
	var newMovie = {
		title: title,
		releaseyear: year,
		genre: genre
		//rating: rating
	};
	movies.push(newMovie);
}
function getTopRatedMovie() {
	// variables needed to calculate the average and to store the movie
	// with the lowest average scoore
	// since im using "let" it alows me to use the same variable name in a differents scoope
	let ratingSum = 0, avrg = 0, bestMovie = "";
	for (let i = 0; i < movies.length; i++) {
	 	// secoond loop to calculate the average rating of a certain movie
	 	for (let j = 0; j < movies[i].rating.length; j++) {
	 		ratingSum += movies[i].rating[j];
	 	}
	 	if(avrg === ratingSum / movies[i].rating.length){
	 		bestMovie += `, ${movies[i].title}`;
	 	}
	 	else if(avrg < ratingSum / movies[i].rating.length){
	 		avrg = ratingSum / movies[i].rating.length;
	 		bestMovie = movies[i].title;
	 	}
	 	compAvrg = 0;
	}
	return `${bestMovie}`;
}
// basicly same as above
function getWortsRatedMovie(){
	let ratingSum = 0, avrg = 10, worseMovie = "";
	for (let i = 0; i < movies.length; i++) {
	 	for (let j = 0; j < movies[i].rating.length; j++) {
	 		ratingSum += movies[i].rating[j];
	 	}
	 	if(avrg === ratingSum / movies[i].rating.length){
	 		worseMovie += `, ${movies[i].title}`;
	 	}
	 	else if(avrg > ratingSum / movies[i].rating.length){
	 		avrg = ratingSum / movies[i].rating.length;
	 		worseMovie = `${movies[i].title}`; 
	 		}
	 	ratingSum = 0;
	}
	return `${worseMovie}`;
}
// here we loop throu the movies array to find the movies created a certain year
function getMoviesByYear(year) {
	// creating an array to store the movie/movies
	let sortedMovies = [];
	for(let i = 0; i < movies.length; i++){
		if(movies[i].releaseyear === year){
			sortedMovies.push(movies[i].title);
		}
	}
	return sortedMovies;
}
function getMoviesByGenres(genre) {
	let sortedMovies = [];
	for(let i = 0; i < movies.length; i++){
		for(let j = 0; j < movies[i].genre.length; j++){
			if(movies[i].genre[j] === genre.toLowerCase()){
				sortedMovies.push(movies[i].title);
			}
		}
	}
	return sortedMovies;
}
function getAllMovieInfo(){
	for(let i= 0; i < movies.length; i++)
	{
		console.log(
			`${movies[i].title}
			${movies[i].releaseyear}
			${movies[i].genre}
			${movies[i].rating}`);
	}
}
function rateMovie(title,rating){
	for(let i = 0; i < movies.length; i++){
		if (title.toLowerCase === movies[i].title)
			movies[i].rating.push(rating);
	}
}


// console.log(getTopRatedMovie());
// console.log(getWortsRatedMovie());
// console.log(getMoviesByYear(1994));

// addMovie("Pulp Fiction",1994,"kriminal","drama");

// console.log(getMoviesByYear(1994));
// console.log(getMoviesByGenres("äventyr"));


for(let i= 0; i < movies.length; i++)
{
	console.log(
		`${movies[i].title}
		${movies[i].releaseyear}
		${movies[i].genre}
		${movies[i].rating}`);
}
