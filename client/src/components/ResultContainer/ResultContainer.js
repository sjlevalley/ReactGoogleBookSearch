import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import axios from "axios";

// import { items as books } from "../../placeholder.json";





function ResultsContainer({ searchResults }) {

    console.log(searchResults);

    const books = searchResults;

    if (books) {
        return (
            <div className="container-fluid mt-4">
                <h3>Results: </h3>
                <div className="container container-fluid m-5 border border-dark">
                    {books.map((book) => (
                        <Book key={book.id} book={book} />
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

export default ResultsContainer;