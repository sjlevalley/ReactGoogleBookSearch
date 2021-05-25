import React from "react";
import "./book.css";
import placeHolder150 from '../Book/placeholder150x150.jpg'
// import ViewButton from "../Buttons/ViewButton";
// import SaveButton from "../Buttons/SaveButton";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Book({ book }) {
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
        console.log(newBook);
        axios.post("/api/books", newBook)
    }

    return (
        <div className="card m-3 border border-dark" style={{}}>
            <div className="row no-gutters">
                <div className="col-md-3">
                    <img src={image}
                        alt={`thumbnail of ${title}`} />
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
                            className="cart-text"
                            name={authors}
                            value={authors}>
                            {authors}</p>
                        <p
                            className="card-text"
                            name={authors}
                            value={authors}>
                            {description}
                        </p>

                        <div className="d-flex justify-content-end">
                            <a
                                className="btn btn-primary m-1"
                                href={link} target="_blank"
                                rel="noopener noreferrer" >
                                View
                                </a>
                            <button
                                href="#"
                                className="btn btn-success m-1"
                                onClick={saveBook}
                            >
                                Save
                                </button>
                            <ToastContainer />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Book;