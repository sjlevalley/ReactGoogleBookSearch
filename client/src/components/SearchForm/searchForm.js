import React from "react";
import "./searchForm.css";


function SearchForm({ handleSearchChange, search }) {
    return (

        <div className="container-fluid border border-dark">
            <h3>Book Search</h3>
            <hr />
            <form className="">
                <div className="form-group">
                    <label htmlFor="search">Book</label>
                    <input
                        type="text"
                        onChange={handleSearchChange}
                        value={search}
                        className="form-control"
                        id="search"
                        placeholder="Enter Search Here" />
                </div>
                <button className="btn btn-primary">Search</button>
            </form>

        </div >

    );
}

export default SearchForm;