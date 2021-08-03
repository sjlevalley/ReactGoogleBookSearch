import React from "react";
import "./searchForm.css";
import 'bootstrap/dist/css/bootstrap.css';


function SearchForm({ handleSearchChange, handleFormSubmit, search }) {
    return (

        <div id="searchForm" className="border m-2 p-4">
            <h3 id="searchForm">Book Search</h3>
            <form id="searchForm" onSubmit={handleFormSubmit} className="m-0">
                <div id="searchForm" className="form-group">
                    <label id="searchForm" htmlFor="search">Book:</label>
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