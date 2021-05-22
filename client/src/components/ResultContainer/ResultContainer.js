import React from "react";
import Book from "../Book/Book";





function ResultsContainer() {
    return (
        <>
            <div className="container container-fluid m-5 border border-dark">
                <Book />
            </div>
            <div className="container container-fluid m-5 border border-dark">
                <Book />
            </div>
        </>

    );
}

export default ResultsContainer;