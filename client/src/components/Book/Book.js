import React from "react";
import "./book.css";
import ViewButton from "../Buttons/ViewButton";
import SaveButton from "../Buttons/SaveButton";



function Book({ book }) {
    console.log(book);
    const { title, authors, description, imageLinks, infoLink } = book.volumeInfo;




    return (
        <div className="card m-3 border border-dark" style={{}}>
            <div className="row no-gutters">
                <div className="col-md-3">
                    <img src={imageLinks.thumbnail}
                        alt={`thumbnail of ${title}`} />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="cart-text">{authors}</p>
                        <p className="card-text">{description}</p>

                        <div className="d-flex justify-content-end">
                            <a className="btn btn-primary m-1" href={infoLink} target="_blank" rel="noopener noreferrer" >View</a>
                            <button href="#" className="btn btn-success m-1">Save</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Book;