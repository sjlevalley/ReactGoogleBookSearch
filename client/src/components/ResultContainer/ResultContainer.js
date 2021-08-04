import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import './resultscontainer.css'
// import { items as books } from "../../placeholder.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResultsContainer({ searchResults, search, page }) {
    const [books, setBooks] = useState()




    useEffect(() => {
        setBooks(searchResults)
    }, [searchResults])




    if (books) {
        return (
            <div id="resultContainer" className="m-2 p-3">
                {search ? <h3 id="resultContainer">Results for "{search}"</h3> : ""}
                <ToastContainer
                    className="bg-success d-flex justify-content-center"
                    style={{ opacity: 0.9 }}
                    position="top-right"
                    autoClose={1500}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable
                />
                {books.map((book) => (
                    <Book key={book.text} book={book} page={page} />
                ))}
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