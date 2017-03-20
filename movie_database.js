// WHERE DOES THE EXTRA ARRAY COME FROM??!!


// revealing module patter
// i think is more readable, makes sense in my head
const MovieDatabase = (function() {
	
	// lots of movies.....
	const movies = [
	{
		title: "braveheart",
		releaseyear: 1995,
		genre: ["krig","drama"],
		rating: [10,9,8,6,10],
		poster: "http://img.goldposter.com/2015/04/Braveheart_poster_goldposter_com_9.jpg",
		avrgRating: function() {
			let sum = 0, average = 0;
			for (var i = 0; i < this.rating.length; i++) {
				sum += this.rating[i];
			}
			average = sum/this.rating.length;
			return average.toFixed(1);
		}
	},
	{
		title: "the shawshank redemption",
		releaseyear: 1994,
		genre: ["kriminal","drama"],
		rating: [9,8,4,8,10,9,10],
		poster: "http://ilarge.lisimg.com/image/5707020/1118full-the-shawshank-redemption-artwork.jpg",
		avrgRating: function() {
			let sum = 0, average = 0;
			for (var i = 0; i < this.rating.length; i++) {
				sum += this.rating[i];
			}
			average = sum/this.rating.length;
			return average.toFixed(1);
		}
	},
	{
		title: "schindler's list",
		releaseyear: 1993,
		genre: ["historia","drama","biografi"],
		rating: [10,6,3,8,5,8,9],
		poster: "https://s-media-cache-ak0.pinimg.com/originals/3a/59/71/3a597156547ca6d325a8f4b1cf79c746.jpg",
		avrgRating: function() {
			let sum = 0, average = 0;
			for (var i = 0; i < this.rating.length; i++) {
				sum += this.rating[i];
			}
			average = sum/this.rating.length;
			return average.toFixed(1);
		}
	},
	{
		title: "the lord of the ring triology",
		releaseyear: 2003,
		genre: ["äventyr","drama","fanatsy"],
		rating: [10,8,6,9,9,8,8,],
		poster: "https://s-media-cache-ak0.pinimg.com/originals/f0/a3/c5/f0a3c5590dab0a7d7cdc273208eedd63.jpg",
		avrgRating: function() {
			let sum = 0, average = 0;
			for (var i = 0; i < this.rating.length; i++) {
				sum += this.rating[i];
			}
			average = sum/this.rating.length;
			return average.toFixed(1);
		}
	},
	{
		title: "one went over the cockoo's nest",
		releaseyear: 1975,
		genre: ["drama"],
		rating: [8,7,6,3,5,2,9],
		poster: "https://www.coningsbygallery.com/image/2259/super",
		avrgRating: function() {
			let sum = 0, average = 0;
			for (var i = 0; i < this.rating.length; i++) {
				sum += this.rating[i];
			}
			average = sum/this.rating.length;
			return average.toFixed(1);
		}
	},
	{
		title: "inception",
		releaseyear:2010,
		genre: ["krig","drama"],
		rating: [8,9,10,7,8,9,8,9],
		poster: "https://thedullwoodexperiment.files.wordpress.com/2015/10/inception.jpg",
		avrgRating: function() {
			let sum = 0, average = 0;
			for (var i = 0; i < this.rating.length; i++) {
				sum += this.rating[i];
			}
			average = sum/this.rating.length;
			return average.toFixed(1);
		}
	},
	{
		title: "interstellar",
		releaseyear: 2014,
		genre: ["äventyr","drama","sci-fi"],
		rating: [10,9,8,6,10],
		poster: "https://s-media-cache-ak0.pinimg.com/originals/5f/5d/62/5f5d62e677bc0ce40e6a258ad8277064.jpg",
		avrgRating: function() {
			let sum = 0, average = 0;
			for (var i = 0; i < this.rating.length; i++) {
				sum += this.rating[i];
			}
			average = sum/this.rating.length;
			return average.toFixed(1);
		}
	},
	{
		title: "psycho",
		releaseyear: 1960,
		genre: ["skräck","thriller"],
		rating: [10,10,10,9,8,10],
		poster: "https://s-media-cache-ak0.pinimg.com/originals/37/55/f3/3755f357da7994677309ccd37e276129.jpg",
		avrgRating: function(){
			let sum = 0, average = 0;
			for (var i = 0; i < this.rating.length; i++) {
				sum += this.rating[i];
			}
			average = sum/this.rating.length;
			return average.toFixed(1);
		}
	},
	];

	
	// this is a constructor
	const CreateMovie = function(title,year,rating,poster,...genre){
		this.title =  title;
		this.releaseyear = year;
		this.genre = genre;
		this.rating = [rating];
		this.poster = poster;
	};
	// the average rating function should always be included
	CreateMovie.prototype.avrgRating = function(){
		// reduce??
		let sum = 0, average = 0;
			for (var i = 0; i < this.rating.length; i++) {
				sum += this.rating[i];
			}
			average = sum/this.rating.length;
			return average.toFixed(1);
		};
	// adding the new movie to the database

	CreateMovie.prototype.addMovie = function(){
		movies.push(this);
	};

	// a way to get all the availiable info
	// later to beable to sort and display....
	const getAllMovieInfo = () => {
		const allTheInfo = [movies];
		for(let i= 0; i < movies.length; i++)
		{
			allTheInfo.push(movies[i]);
		}
		return allTheInfo;
	}

	const getTopRatedMovie = () => {
		// variables needed to calculate the average and to store the movie
		// with the lowest/highest average scoore
		// since im using "let" it alows me to use the same variable name in a differents scoope
		let ratingSum = 0, avrg = 0, bestMovie = [];
		for (let i = 0; i < movies.length; i++) {
		 	// secoond loop to calculate the average rating of a certain movie
		 	for (let j = 0; j < movies[i].rating.length; j++) {
		 		ratingSum += movies[i].rating[j];
		 	}
		 	if(avrg === ratingSum / movies[i].rating.length){
		 		bestMovie.push(movies[i]);
		 	}
		 	else if(avrg < ratingSum / movies[i].rating.length){
		 		avrg = ratingSum / movies[i].rating.length;
		 		bestMovie = movies[i];
		 	}
		 	compAvrg = 0;
		}
		return bestMovie;
	}

	// basicly same as above
	const getWortsRatedMovie = () => {
		let ratingSum = 0, avrg = 10, worseMovie = [];
		for (let i = 0; i < movies.length; i++) {
		 	for (let j = 0; j < movies[i].rating.length; j++) {
		 		ratingSum += movies[i].rating[j];
		 	}
		 	if(avrg === ratingSum / movies[i].rating.length){
		 		worseMovie.push(movies[i]);
		 	}
		 	else if(avrg > ratingSum / movies[i].rating.length){
		 		avrg = ratingSum / movies[i].rating.length;
		 		worseMovie = movies[i]; 
		 		}
		 	ratingSum = 0;
		}
		return worseMovie;
	}

	// here we loop throu the movies array to find the movies created a certain year
	const getMoviesByYear = (year) => {
		// creating an array to store the movie/movies
		let sortedMovies = [];
		// can i use map
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
		const sortedMovies = [];
		// map??
		for(let i = 0; i < movies.length; i++){
			for(let j = 0; j < movies[i].genre.length; j++){
				if(movies[i].genre[j] === genre.toLowerCase()){
					sortedMovies.push(movies[i].title);
				}
			}
		}
		return sortedMovies;
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
		CreateMovie: CreateMovie,
		getAllMovieInfo: getAllMovieInfo,
		getMoviesByGenres: getMoviesByGenres,
		getMoviesByYear: getMoviesByYear,
		getWortsRatedMovie: getWortsRatedMovie,
		getTopRatedMovie: getTopRatedMovie
	};
})();

// DOM manipulation time!!

// this is where i dispay all the movie with some cover art.
// create a function to make variables private
// create all the ellements needed
(function (){
	let movieData = MovieDatabase.getAllMovieInfo();
	let moviesList = document.createElement("ul");
	moviesList.setAttribute("id","movieList");
	moviesList.setAttribute("style","list-style-type: none;" + "padding-top: 150px;" + " margin: 0;");
	for(let i= 1; i < movieData.length; i++)
	{	
		let listItem = document.createElement("li");
		let img = document.createElement("img");
		let infoCover = document.createElement("div");
		let container = document.createElement("div");
		let title = document.createElement("h2");
		let genre = document.createElement("p");
		let year = document.createElement("p");
		let rating = document.createElement("p");
		let edit = document.createElement("button");

		img.setAttribute("src",movieData[i].poster);
		img.setAttribute("alt",movieData[i].title);
		img.setAttribute("class","cover-art");
		title.setAttribute("class","title");
		genre.setAttribute("class","genre");
		year.setAttribute("class","year");
		rating.setAttribute("class","rating");
		infoCover.setAttribute("class","cover-up");
		container.setAttribute("class","container");
		listItem.setAttribute("style","padding: 5px;");
		edit.setAttribute("class","edit-button");
		edit.setAttribute("type","button"); // to not refresh the page.

		title.innerHTML = `${movieData[i].title.toUpperCase()}`;
		genre.innerHTML = `${movieData[i].genre}`;
		year.innerHTML = `${movieData[i].releaseyear}`
		rating.innerHTML = `${movieData[i].avrgRating()}`;
		edit.innerHTML = "Edit"

		moviesList.appendChild(listItem);
		listItem.appendChild(container);
		container.appendChild(img);
		container.appendChild(infoCover);
		infoCover.appendChild(title);
		infoCover.appendChild(genre);
		infoCover.appendChild(rating);
		infoCover.appendChild(year);
		infoCover.appendChild(edit);

	}
	document.body.appendChild(popUp);
	document.body.appendChild(moviesList);
})();

(function (){
	// sort the movie list alfabetically
	document.getElementById("title").addEventListener("click", function(){
		let movieList = MovieDatabase.getAllMovieInfo();
		// movieList.title.map??
		movieList.sort(function(a, b) {
	  	if (a.title < b.title) {
	    	return -1;
	  	}
	  	else if (a.title > b.title) {
	    	return 1;
	  	}
	  	else
	  		return 0;
		});
		
		console.log("alfabetically");
		for (let i = 1; i < movieList.length; i++)
		{
			// console.log(movieList[i]);
			// console.log(this);
			document.getElementsByClassName("cover-art")[i-1].setAttribute("src",movieList[i].poster);
			document.getElementsByClassName("title")[i-1].innerHTML = movieList[i].title.toUpperCase();
			document.getElementsByClassName("rating")[i-1].innerHTML = movieList[i].avrgRating();
			document.getElementsByClassName("genre")[i-1].innerHTML = movieList[i].genre;
			document.getElementsByClassName("year")[i-1].innerHTML = movieList[i].releaseyear;
		}

		console.log(MovieDatabase.getAllMovieInfo());
	});

	// sorting after year of releease
	document.getElementById("year-of-release").addEventListener("click", function(){
		// movieList.releaseYear.map??
		let movieList = MovieDatabase.getAllMovieInfo();
		
		movieList.sort(function(a, b) {
	  	if (a.releaseyear < b.releaseyear) {
	    	return 1;
	  	}
	  	else if (a.releaseyear > b.releaseyear) {
	    	return -1;
	  	}
	  	else
	  		return 0;
		});
		
		console.log("year-of-release");
		for (let i = 1; i < movieList.length; i++)
		{
			// console.log(movieList[i]);
			document.getElementsByClassName("cover-art")[i-1].setAttribute("src",movieList[i].poster);
			document.getElementsByClassName("title")[i-1].innerHTML = movieList[i].title.toUpperCase();
			document.getElementsByClassName("rating")[i-1].innerHTML = movieList[i].avrgRating();
			document.getElementsByClassName("genre")[i-1].innerHTML = movieList[i].genre;
			document.getElementsByClassName("year")[i-1].innerHTML = movieList[i].releaseyear;
		}

		console.log(MovieDatabase.getAllMovieInfo());
	});

	// sorting after avg.rating
	// that doesn't work well....WHY!!!???
	document.getElementById("rating").addEventListener("click", function(){
		// // movieList.avrgRating.map??
		let movieList = MovieDatabase.getAllMovieInfo();
		
		movieList.sort(function(a, b) {
	  	if (a.avrgRating < b.avrgRating) {
	    	return 1;
	  	}
	  	else if (a.avrgRating > b.avrgRating) {
	    	return -1;
	  	}
	  	else
	  		return 0;
		});
		
		console.log("average rating");
		for (let i = 1; i < movieList.length; i++)
		{
			// console.log(movieList[i].title + " " + movieList[i].avrgRating());
			document.getElementsByClassName("cover-art")[i-1].setAttribute("src",movieList[i].poster);
			document.getElementsByClassName("title")[i-1].innerHTML = movieList[i].title.toUpperCase();
			document.getElementsByClassName("rating")[i-1].innerHTML = movieList[i].avrgRating();
			document.getElementsByClassName("genre")[i-1].innerHTML = movieList[i].genre;
			document.getElementsByClassName("year")[i-1].innerHTML = movieList[i].releaseyear;
		}

		console.log(MovieDatabase.getAllMovieInfo());
	});
	
	//  crating a new movie for the database.
	//  document.getElementById("comfirmAdd").addEventListener("click", function(){
		
	//  let newMovie = new MovieDatabase.CreateMovie("the Matrix triology",2003,9.0,"https://s-media-cache-ak0.pinimg.com/originals/cd/d2/88/cdd2885ed4bd015cf75ffc3e6b150012.jpg","action","sci-fi");
	// 	let moviesList = document.getElementById("movieList")
	// 	let movieData = MovieDatabase.getAllMovieInfo();
	// 	let listItem = document.createElement("li");
	// 	let img = document.createElement("img");
		
		
	// 	listItem.setAttribute("style","padding: 5px;");
	// 	img.setAttribute("class","cover-art");
	// 	img.setAttribute("src",movieData[movieData.length - 1].poster);
	// 	img.setAttribute("alt",movieData[movieData.length - 1].title);
		
		
	// 	moviesList.appendChild(listItem);
	// 	listItem.appendChild(img);

	// 	newMovie.addMovie();
	// 	console.log(MovieDatabase.getAllMovieInfo());
	//  });

	//  this is just to enlarge the img....
	for (let i = 1; i < MovieDatabase.getAllMovieInfo().length; i++) {
		document.getElementsByClassName("cover-up")[i-1].addEventListener("click", function(){
			let popUp = document.getElementById("popUp");
			let img = document.getElementById("big-pic");
			
			img.src = document.getElementsByClassName("cover-art")[i-1].src;
			popUp.style.display = "block";
			img.style.display = "block";

			console.log(MovieDatabase.getAllMovieInfo());
		});
		
		// same pop-up ass add but the only thing u can do is to add rating and/or genre
		document.getElementsByClassName("edit-button")[i-1].addEventListener("click", function(){
			// let popUp = document.getElementById("popUp");
			// let form = document.getElementById("new-movie");
			// popUp.style.display = "block";
			// form.style.display = "block";
		});
	}

	// i was thinking i might be able to add a popup with the info in the 
	// moviedatabase and the posibility to rate the movie

	// Opens a pop-up with av form to create a new movie
	document.getElementById("addButton").addEventListener("click", function(){
		let form = document.getElementById("new-movie");
		let popUp = document.getElementById("popUp");
		
		popUp.style.display = "block";
		form.style.display = "block";

		console.log(MovieDatabase.getAllMovieInfo());
	});
	// closing the poop_up
	document.getElementById("big-pic").addEventListener("click", function() { 
		let form = document.getElementById("new-movie");
		let pic = document.getElementById("big-pic");
		let popUp = document.getElementById("popUp");
		
		popUp.style.display = "none";
		form.style.display = "none";
		pic.style.display = "none";

		console.log(MovieDatabase.getAllMovieInfo());
	});
	// making a new movieobjekt ta add to the list
	// I don't understand why i don't get it to work, does the confirm button reload the page??? Yes it does!!! fixed!
	document.getElementById("confirm-button").addEventListener("click", function(){

		let title = document.getElementById("input-title").value;
		let year = document.getElementById("input-releaseYear").value;
		let rating = document.getElementById("input-rating").value;
		let poster = document.getElementById("input-url").value;
		let genre = document.getElementById("input-genre").value;
		
		let form = document.getElementById("new-movie");
		let popUp = document.getElementById("popUp");
				
		let newMovie = new MovieDatabase.CreateMovie(title, year, rating, poster, genre);
		
		newMovie.addMovie();
		
		popUp.style.display = "none";
		form.style.display = "none";

		console.log(MovieDatabase.getAllMovieInfo());
	});
	// closing the pop-up
	document.getElementById("cancel-button").addEventListener("click", function() { 
		let form = document.getElementById("new-movie");
		let pic = document.getElementById("big-pic");
		let popUp = document.getElementById("popUp");
		
		popUp.style.display = "none";
		form.style.display = "none";
		pic.style.display = "none";

		console.log(MovieDatabase.getAllMovieInfo());
	});
})();

// Things I need: 
// * Not adding anything when form is empty, 
// * On edit klick: Want the form to pop-up whith pre-filled form 
//   were I don't want changes to happen and left empty were I want the added info, genre or/and rating, 
// * Not dispaying movie without rating
// * get the to top button to work

// BUG: the MovieDatabase Copies itself and adds it to the database, and when i add a new movie it disapears....WHAT!!!
// (that is why all my loops starts att 1)
// BUG: Edit button acts like the pic when clicked on even thou I don't whant it to.... do i click on both???


// Creating a function that gets the elements for setting attributes in the sorting and for the pop-up, 
// or at least one for closing the pop-up, then call on it within the eventlisteners.....DRY. Would that work?
// decleration programming, is it what I have done here??