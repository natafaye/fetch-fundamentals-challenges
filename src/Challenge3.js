import React from 'react'

/*
 * Challenge 3: Deleting and Alerting
 * 
 * When it's working correctly, after you click
 * the Delete button the movie The Avengers
 * should no longer show up in the list when
 * you click the Fetch All Movies button
 * 
 * Note: If you click the Delete button
 * twice you will get a 404 response the
 * second time because it couldn't find
 * the movie to delete again.
 * 
 */

const fetchAllMovies = async () => {
    // TODO: Fetch all the movies
    // (You can copy this from Challenge 2)
}

const deleteMovie = async (id) => {
    // TODO: Delete the movie with the passed in id

    // Note: You don't need to parse any data from
    // the response or return anything
}

/**** DON'T CHANGE ANYTHING BELOW ****/

export default function Challenge3() {

    const onFetchMoviesClick = async () => {
        const fetchedMovies = await fetchAllMovies();
        alert("Fetched:\n" + fetchedMovies.map(movie => movie.name).join("\n"));
    }

    const onDeleteMovieClick = async () => {
        await deleteMovie(0)
        alert("Finished trying to delete!");
    }

    return (
        <div>
            <button className="btn btn-primary me-2" onClick={onFetchMoviesClick}>
                Fetch All Movies
            </button>
            <button className="btn btn-primary" onClick={onDeleteMovieClick}>
                Delete Movie With Id 0
            </button>
        </div>
    )
}
