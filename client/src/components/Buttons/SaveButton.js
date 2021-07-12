import React from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


function SaveButton(title, authors, description, image, link) {

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
    return (
        <button
            href="#"
            className="btn btn-success m-1"
            onClick={saveBook}
        >
            Save
        </button>
    );
}

export default SaveButton;