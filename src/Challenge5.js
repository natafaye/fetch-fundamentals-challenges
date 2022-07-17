import React from 'react'

/*
 * Challenge 4: Updating and Alerting
 * 
 * When it's working correctly you should see:
 * 
 *   Fetched: Star Wars
 * 
 * when the Fetch Movie button is clicked
 * before the Update Movie button is.
 * 
 * After the Update Movie button is clicked, the
 * Fetch Movie button should show you:
 * 
 *   Fetched: Star Wars: Return of the Jedi
 * 
 */

const fetchMovieById = async (id) => {
    // TODO: Fetch the movie with the specified id
    // (You can copy this from Challenge 4)
}

const updateMovieById = async (id, updatedData) => {
    // TODO: Update the movie with the specified id with the specified updated data
    // The endpoint for movies is: '/api/movies'
}

/**** DON'T CHANGE ANYTHING BELOW ****/

export default function Challenge5() {

    const onFetchMovieClick = async () => {
        const fetchedMovie = await fetchMovieById(1);
        alert("Fetched: " + fetchedMovie.name)
    }

    const onUpdateMovieClick = async () => {
        await updateMovieById(2, { name: "Star Wars: Return of the Jedi" });
        alert("Finished trying to update");
    }

    /**** DON'T CHANGE ANYTHING BELOW ****/

    return (
        <div>
            <button className="btn btn-primary me-2" onClick={onFetchMovieClick}>
                Fetch Movie With Id 1
            </button>
            <button className="btn btn-primary" onClick={onUpdateMovieClick}>
                Update "Star Wars" to "Star Wars: Return of the Jedi"
            </button>
        </div>
    )
}
