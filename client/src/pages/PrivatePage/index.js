
import React, { useEffect, useState } from "react";
import axios from 'axios';
import ResultsContainer from "../../components/ResultContainer/ResultContainer";



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
      <ResultsContainer
        page="savedBooks"
        searchResults={bookList}
      />

    </div>
  );
}

export default PrivatePage;