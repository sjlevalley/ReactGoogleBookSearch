
import React, { useEffect, useState } from "react";
import axios from 'axios';
import SavedResultsContainer from "../../components/ResultContainer/savedResultsContainer";



function PrivatePage() {

  const [bookList, setBookList] = useState([])
  const [savedBooks, setSavedBooks] = useState({
    books: []
  });



  useEffect(() => {
    axios.get("/api/books")
      .then(res => setSavedBooks({ books: res }))
      .then(setBookList(savedBooks.books.data))
  }, [savedBooks.books.data])


  return (
    <div>
      <SavedResultsContainer
        searchResults={bookList}
      />

    </div>
  );
}

export default PrivatePage;