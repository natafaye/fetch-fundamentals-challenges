import React from 'react'

/*
 * Challenge 6: Creating and Alerting
 * 
 * When it's working correctly, every time you
 * click the Create button a new Harry Potter
 * book should show up in the list when you
 * click the Fetch All Books button
 * 
 */

const fetchAllBooks = async (id) => {
    // TODO: Fetch all the books
    // The endpoint for books is: '/api/books'
}

const createBook = async (newBookData) => {
    // TODO: Create a book with the specified data
    // The endpoint for books is: '/api/books'
}

/**** DON'T CHANGE ANYTHING BELOW ****/

// Just a little helper variable
let bookCreationCount = 1;

export default function Challenge6() {

    const onFetchBooksClick = async () => {
        const fetchedBooks = await fetchAllBooks();
        alert("Fetched:\n" + fetchedBooks.map(book => book.name).join("\n"));
    }

    const onCreateBookClick = async () => {
        await createBook({ name: "Harry Potter " + bookCreationCount++ });
        alert("Finished trying to create");
    }

    /**** DON'T CHANGE ANYTHING BELOW ****/

    return (
        <div>
            <button className="btn btn-primary me-2" onClick={onFetchBooksClick}>
                Fetch All Books
            </button>
            <button className="btn btn-primary" onClick={onCreateBookClick}>
                Create a New Book
            </button>
        </div>
    )
}
