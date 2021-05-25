
import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for
// the passed query

export const bookAPI = async (query) => {
    const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
    const res = await axios.get(BASEURL + query)

    return res.data.items.map(({ volumeInfo }) => {
        return {
            title: volumeInfo.title,
            authors: volumeInfo.authors,
            description: volumeInfo.description,
            image: volumeInfo.imageLinks?.thumbnail,
            link: volumeInfo.infoLink
        };
    });
};
