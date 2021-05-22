import React from "react";
import "./book.css";
import placeHolder150 from '../Book/placeholder150x150.jpg'
import ViewButton from "../Buttons/ViewButton";
import SaveButton from "../Buttons/SaveButton";




function Book() {
    return (
        <div className="container-fluid">
            <h2>Title: Harold Pottery</h2>
            <ViewButton />
            <SaveButton />
            <h6>Author: Who Knows</h6>
            <img src={placeHolder150} alt="Placeholder" className="float-left" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>

    );
}

export default Book;