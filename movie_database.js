// revealing module patter
// i think is more readable, makes sense in my head
const MovieDatabase = (function() {
	
	// lots of movies.....
	let movies = [
	{
		title: "braveheart",
		releaseyear: 1995,
		genre: ["krig","drama"],
		rating: [10,9,8,6,10],
		poster: "http://img.goldposter.com/2015/04/Braveheart_poster_goldposter_com_9.jpg"
	},
	{
		title: "nyckeln till frihet",
		releaseyear: 1994,
		genre: ["kriminal","drama"],
		rating: [9,8,4,8,10,9,10],
		poster: "http://ilarge.lisimg.com/image/5707020/1118full-the-shawshank-redemption-artwork.jpg"	
	},
	{
		title: "schindler's list",
		releaseyear: 1993,
		genre: ["historia","drama","biografi"],
		rating: [10,6,3,8,5,8,9],
		poster: "https://s-media-cache-ak0.pinimg.com/originals/3a/59/71/3a597156547ca6d325a8f4b1cf79c746.jpg"	
	},
	{
		title: "sagan om ringen triologin",
		releaseyear: 2003,
		genre: ["äventyr","drama","fanatsy"],
		rating: [10,8,6,9,9,8,8,],
		poster: "https://s-media-cache-ak0.pinimg.com/originals/f0/a3/c5/f0a3c5590dab0a7d7cdc273208eedd63.jpg"	
	},
	{
		title: "gökboet",
		releaseyear: 1975,
		genre: ["drama"],
		rating: [8,7,6,3,5,2,9],
		poster: "https://www.coningsbygallery.com/image/2259/super"	
	},
	{
		title: "inception",
		releaseyear:2010,
		genre: ["krig","drama"],
		rating: [8,9,10,7,8,9,8,9],
		poster: "https://thedullwoodexperiment.files.wordpress.com/2015/10/inception.jpg"	
	},
	{
		title: "interstellar",
		releaseyear: 2014,
		genre: ["äventyr","drama","sci-fi"],
		rating: [10,9,8,6,10],
		poster: "https://s-media-cache-ak0.pinimg.com/originals/5f/5d/62/5f5d62e677bc0ce40e6a258ad8277064.jpg"
	},
	{
		title: "psycho",
		releaseyear: 1960,
		genre: ["skräck","thriller"],
		rating: [10,10,10,9,8,10],
		poster: "https://s-media-cache-ak0.pinimg.com/originals/37/55/f3/3755f357da7994677309ccd37e276129.jpg"	
	},
	];

	// this is a constructor... kind of??
	const addMovie = (title,year,...genre) => {
		// objekt literal? felt naturally for me.
		let newMovie = {
			title: title,
			releaseyear: year,
			genre: genre
			//rating: rating
		};
		movies.push(newMovie);
	}

	const getTopRatedMovie = () => {
		// variables needed to calculate the average and to store the movie
		// with the lowest/highest average scoore
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
	const getWortsRatedMovie = () => {
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
	const getMoviesByYear = (year) => {
		// creating an array to store the movie/movies
		let sortedMovies = [];
		for(let i = 0; i < movies.length; i++){
			if(movies[i].releaseyear === year){
				sortedMovies.push(movies[i].title);
			}
		}
		return sortedMovies;
	}

	// first we enter the movies array 
	// the we go throu the genres and store the movie within that genre in an array
	const getMoviesByGenres = (genre) => {
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
	// a way to get all the availiable info
	// later to beable to sort and display....
	const getAllMovieInfo = () => {
		const allTheInfo = [];
		for(let i= 0; i < movies.length; i++)
		{
			allTheInfo.push(movies[i]);
		}
		return allTheInfo;
	}
	// a way to push in rating to movie
	const rateMovie = (title,rating) => {
		for(let i = 0; i < movies.length; i++){
			if (title.toLowerCase === movies[i].title)
				movies[i].rating.push(rating);
		}
	}
	// the functions to call on.
	return {
		rateMovie: rateMovie,
		addMovie: addMovie,
		getAllMovieInfo: getAllMovieInfo,
		getMoviesByGenres: getMoviesByGenres,
		getMoviesByYear: getMoviesByYear,
		getWortsRatedMovie: getWortsRatedMovie,
		getTopRatedMovie: getTopRatedMovie
	};
})();


// console.log(getTopRatedMovie());
// console.log(getWortsRatedMovie());
// console.log(getMoviesByYear(1994));

// addMovie("Pulp Fiction",1994,"kriminal","drama");

// console.log(getMoviesByYear(1994));
// console.log(getMoviesByGenres("äventyr"));

const a = MovieDatabase.getAllMovieInfo();

for(let i = 0; i < a.length; i++){
	
	console.log(
		`${a[i].title}
		${a[i].releaseyear}
		${a[i].genre}
		${a[i].rating}
		${a[i].poster}`);
}


// DOM manipulation time!!

// this is where i dispay all the movie with some cover art.
for(let i= 0; i < MovieDatabase.getAllMovieInfo().length; i++)
{
	let container = document.createElement("div");
	let img = document.createElement("img");
	container.setAttribute("class","img-container");
	img.setAttribute("width", 100);
	img.setAttribute("height", 150);
	img.setAttribute("src",MovieDatabase.getAllMovieInfo()[i].poster);
	img.setAttribute("alt",MovieDatabase.getAllMovieInfo()[i].title);
	img.setAttribute("class","cover-art");
	container.appendChild(img);
	document.body.appendChild(container);
}
// trying to sort the movie list alfabetically
document.getElementById("title").addEventListener("click", function(){
	let movieList = MovieDatabase.getAllMovieInfo();
	movieList.sort(function(a, b) {
  	if (a.title < b.title) {
    	return -1;
  	}
  	if (a.title > b.title) {
    	return 1;
  	}
  	return 0;
	});

	document.getElementsByClassName("img-container").innerHTML = "";
	for (let i = 0; i < movieList.length; i++)
	{
		document.getElementsByClassName("cover-art")[i].setAttribute("src",movieList[i].poster);
	}
});
// sorting after year of releease
document.getElementById("year-of-release").addEventListener("click", function(){
	let movieList = MovieDatabase.getAllMovieInfo();
	movieList.sort(function(a, b) {
  	if (a.releaseyear < b.releaseyear) {
    	return -1;
  	}
  	if (a.releaseyear > b.releaseyear) {
    	return 1;
  	}
  	return 0;
	});

	for (let i = 0; i < movieList.length; i++)
	{
		document.getElementsByClassName("cover-art")[i].setAttribute("src",movieList[i].poster);
	}
});
// sorting after avg.rating
// document.getElementById("rating").addEventListener("click", function(){
// 	let movieList = MovieDatabase.getAllMovieInfo();
// 	movieList.sort(function(a, b) {
//   	if (a.title < b.title) {
//     	return -1;
//   	}
//   	if (a.title > b.title) {
//     	return 1;
//   	}
//   	return 0;
// 	});

// 	for (let i = 0; i < movieList.length; i++)
// 	{
// 		document.getElementsByClassName("cover-art")[i].setAttribute("src",movieList[i].poster);
// 	}
// });