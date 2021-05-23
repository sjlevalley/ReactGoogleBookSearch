import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import axios from "axios";

import { items as books } from "../../placeholder.json";





function ResultsContainer() {

    //   Test Google Books Search
    useEffect(() => {
        axios
            .get("https://www.googleapis.com/books/v1/volumes?q=quilting")
            .then(console.log)
            .catch(console.log);
    });


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
}

export default ResultsContainer;