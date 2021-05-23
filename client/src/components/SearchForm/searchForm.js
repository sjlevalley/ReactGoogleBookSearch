import React from "react";
import "./searchForm.css";


function SearchForm({ handleSearchChange, handleFormSubmit, search }) {
    return (

        <div className="container-fluid border border-dark">
            <h3>Book Search</h3>
            <hr />
            <form onSubmit={handleFormSubmit} className="">
                <div className="form-group">
                    <label htmlFor="search">Book</label>
                    <input
                        defaultValue="Car"
                        type="text"
                        className="form-control"
                        onChange={handleSearchChange}
                        value={search}
                        id="search"
                        placeholder="Enter Search Here" />
                </div>
                <button className="btn btn-primary">Search</button>
            </form>

        </div >

    );
}

export default SearchForm;