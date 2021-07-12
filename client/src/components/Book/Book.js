import React from "react";
import "./book.css";
// import placeHolder150 from '../Book/placeholder150x150.jpg'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Book({ book, page }) {
    const { title, authors, description, image, link } = book;

    function saveBook(event) {
        event.preventDefault()
        const newBook = {
            title: `${title}`,
            authors: `${authors}`,
            description: `${description}`,
            image: `${image}`,
            link: `${link}`
        }
        toast.success(`Book Added!`, { autoClose: 2000 });
        axios.post("/api/books", newBook)
    }

    function deleteBook(event) {
        event.preventDefault()
        const Book = {
            title: `${title}`,
            authors: `${authors}`,
            description: `${description}`,
            image: `${image}`,
            link: `${link}`
        }
        console.log(Book)
        toast.success(`Book Deleted Successfully!`, { autoClose: 2000 });
        axios.delete("/api/books", { data: { title: Book.title } });
    }

    return (
        <div className="card m-3 border border-dark bookCard" style={{}}>
            <div className="row no-gutters">
                <div className="col-md-2 imageContainer">
                    <img
                        id="bookImage"
                        className="bookImage"
                        src={image}
                        alt={`thumbnail of ${title}`}
                    />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5
                            className="card-title"
                            name={title}
                            value={title}>
                            {title}
                        </h5>
                        <p
                            className="card-text"
                            name={authors}
                            value={authors}>
                            {authors}
                        </p>
                        <p
                            className="card-text "
                            id="cardText"
                            name={description}
                            value={description}>
                            {description}
                        </p>

                        <div className="d-flex justify-content-start">
                            <a
                                className="btn btn-primary m-1"
                                href={link} target="_blank"
                                rel="noopener noreferrer" >
                                View
                            </a>
                            {page === "savedBooks" ?
                                // <button href="#" className="btn btn-success m-1" onClick={deleteBook}>Remove Book</button> :
                                <button className="btn btn-danger m-1" onClick={deleteBook}> ✗ </button> :
                                <button href="#" className="btn btn-success m-1" onClick={saveBook}>Save to Reading List</button>}
                            <ToastContainer />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Book;