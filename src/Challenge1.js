import React from 'react'

/*
 * Challenge 1: Fetching One and Alerting
 * 
 * When it's working correctly you should see: 
 * 
 *   Fetched: The Count of Monte Cristo
 * 
 * in an alert when the button is clicked.
 * 
 */

const fetchBookById = async (id) => {
    // TODO: fetch the book with the passed in id
    // The endpoint for books is: '/api/books'

    // Hint: You'll need to make a request,
    // parse the data from the response,
    // and return just the book object
}

/**** DON'T CHANGE ANYTHING BELOW ****/

export default function Challenge1() {

    const onFetchBookClick = async () => {
        const fetchedBook = await fetchBookById(2);
        alert("Fetched: " + fetchedBook.name)
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={onFetchBookClick}>
                Fetch Book With Id 2
            </button>
        </div>
    )
}
