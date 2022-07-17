import React from 'react'

/*
 * Challenge 2: Fetching All and Alerting
 * 
 * When it's working correctly you should see: 
 * 
 *   Fetched:
 *   The Avengers
 *   Star Wars
 *   Black Panther
 * 
 * in an alert when you click
 * 
 */

const fetchAllMovies = async () => {
    // TODO: fetch all the movies
    // The endpoint for movies is: '/api/movies'

    // Hint: You'll need to make a request,
    // parse the data from the response,
    // and return just the array of movies
}

/**** DON'T CHANGE ANYTHING BELOW ****/

export default function Challenge2() {

    const onFetchMoviesClick = async () => {
        const fetchedMovies = await fetchAllMovies();
        alert("Fetched:\n" + fetchedMovies.map(movie => movie.name).join("\n"));
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={onFetchMoviesClick}>
                Fetch All Movies
            </button>
        </div>
    )
}
