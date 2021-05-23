
import axios from "axios";


const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=quilting";

// Export an object with a "search" method that searches the Giphy API for
// the passed query

const API = {
    search: function () {
        return axios.get(BASEURL);
    },
};


export default API;