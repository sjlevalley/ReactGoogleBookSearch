import React from "react";
import "./searchForm.css";
import 'bootstrap/dist/css/bootstrap.css';


function SearchForm({ handleSearchChange, handleFormSubmit, search }) {
    return (

        <div id="searchForm" className="container-fluid p-4">
            <div className="row-lg-12">
                <h3 id="searchForm" className="text-center">Book Search</h3>
            </div>
            <form id="searchForm" onSubmit={handleFormSubmit}>
                <div id="searchForm" className="row text-center d-flex align-items-center justify-content-center">
                    <div id="searchForm" className="col-lg-2">
                        <label id="searchForm" htmlFor="search">Enter A Topic:</label>
                    </div>
                    <div id="searchForm" className="col-lg-5">
                        <input
                            defaultValue="pizza"
                            type="text"
                            className="form-control"
                            onChange={handleSearchChange}
                            value={search}
                            id="search"
                            placeholder="Enter Search Here" />
                    </div>

                </div>
            </form>
        </div >

    );
}

export default SearchForm;