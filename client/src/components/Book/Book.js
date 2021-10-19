import React from "react";
import "./book.css";
// import placeHolder150 from '../Book/placeholder150x150.jpg'
import axios from "axios";
import './book.css'
import { toast } from 'react-toastify';
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
        toast.success('Book Added Successfully!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
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
        toast.success(`Book Deleted Successfully!`, { autoClose: 1500 });
        axios.delete("/api/books", { data: { title: Book.title } });
    }

    return (
        <div id="bookContainer" className="bookCard m-4">

            <div id="bookCard" className="card">
                <div id="bookCard" className="row no-gutters m-1">
                    <div id="bookCard" className="col-md-2 imageContainer">
                        <img
                            id="bookImage"
                            className="bookImage m-2"
                            src={image}
                            alt={`thumbnail of ${title}`}
                        />
                    </div>
                    <div id="bookCard" className="col-md-9">
                        <div id="bookCard" className="card-body">
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


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Book;