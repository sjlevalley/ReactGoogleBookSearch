
import React, { useEffect, useState } from "react";
import SaveButton from "../../components/Buttons/SaveButton";
import axios from 'axios';
import ResultsContainer from "../../components/ResultContainer/ResultContainer";
import Book from "../../components/Book/Book";



function PrivatePage() {


  const [savedBooks, setSavedBooks] = useState({
    books: []
  });

  useEffect(() => {
    axios.get("/api/books")
      .then(res => setSavedBooks({ books: res }))
    // .then(console.log(savedBooks.books.data))
  },

    [])

  let bookList = savedBooks.books.data
  console.log(bookList)



  return (
    <div>
      <ResultsContainer
        searchResults={bookList}
      />

    </div>
  );
}

export default PrivatePage;