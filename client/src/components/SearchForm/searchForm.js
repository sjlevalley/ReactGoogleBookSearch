import React from "react";
import "./searchForm.css";


function SearchForm() {
    return (

        <div className="container-fluid border border-dark">
            <h3>Book Search</h3>
            <hr />
            <h6>Book:</h6>
            <div className="container-fluid w-100">
                <div className="input-group" >
                    <div className="form-outline w-100">
                        <input type="search" id="form1" placeholder="Enter Search Info Here" className="form-control" />
                        <label className="form-label" for="form1"></label>
                    </div>
                    <button type="button" className="btn btn-primary">Search
                        
                    </button>
                </div >

            </div >

        </div >

    );
}

export default SearchForm;