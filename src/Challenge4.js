import React from 'react'

/*
 * Challenge 4: Fetching One and Alerting
 * 
 * When it's working correctly you should see:
 * 
 *   Fetched: Black Panther
 * 
 * when the button is clicked.
 * 
 */

const fetchMovieById = async (id) => {
    // TODO: Fetch the movie with the specified id
    // The endpoint for movies is: '/api/movies'
}

/**** DON'T CHANGE ANYTHING BELOW ****/

export default function Challenge4() {

    const onFetchMovieClick = async () => {
        const fetchedMovie = await fetchMovieById(2);
        alert("Fetched: " + fetchedMovie.name)
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={onFetchMovieClick}>
                Fetch Movie With Id 2
            </button>
        </div>
    )
}
