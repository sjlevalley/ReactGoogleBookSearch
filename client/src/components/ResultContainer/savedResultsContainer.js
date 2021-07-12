import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
// import { items as books } from "../../placeholder.json";

function SavedResultsContainer({ searchResults, search }) {
    const [books, setBooks] = useState()


    useEffect(() => {
        setBooks(searchResults)
    }, [searchResults])




    if (books) {
        return (
            <div className="m-5 border p-3">
                {search ? <h3>Results for "{search}"</h3> : ""}
                <div className="container container-fluid">
                    {books.map((book) => (
                        <Book key={book.text} book={book} />
                    ))}

                </div>
            </div>
        );
    } else {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <h1 className="">No Results Matching Your Search!</h1>
            </div>
        )
    }
}

export default SavedResultsContainer;