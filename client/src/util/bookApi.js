
import axios from "axios";


const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

// Export an object with a "search" method that searches the Giphy API for
// the passed query

const bookAPI = {
    search: function (query) {
        return axios.get(BASEURL + query);
    },
};


export default bookAPI;