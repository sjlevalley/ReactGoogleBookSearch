
import React, { useEffect, useState } from "react";
import axios from 'axios';
import ResultsContainer from "../../components/ResultContainer/ResultContainer";



function PrivatePage() {


  const [savedBooks, setSavedBooks] = useState({
    books: []
  });

  useEffect(() => {
    axios.get("/api/books")
      .then(res => setSavedBooks({ books: res }))
  },

    [savedBooks])

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