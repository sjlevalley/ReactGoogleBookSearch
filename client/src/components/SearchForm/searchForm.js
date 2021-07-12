import React from "react";
import "./searchForm.css";
import 'bootstrap/dist/css/bootstrap.css';


function SearchForm({ handleSearchChange, handleFormSubmit, search }) {
    return (

        <div className="border m-5 p-4">
            <h3>Book Search</h3>
            <form onSubmit={handleFormSubmit} className="m-0">
                <div className="form-group">
                    <label htmlFor="search">Book:</label>
                    <input
                        defaultValue="pizza"
                        type="text"
                        className="form-control"
                        onChange={handleSearchChange}
                        value={search}
                        id="search"
                        placeholder="Enter Search Here" />
                </div>
            </form>

        </div >

    );
}

export default SearchForm;