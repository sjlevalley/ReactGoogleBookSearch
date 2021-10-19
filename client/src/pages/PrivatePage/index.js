
import React, { useEffect, useState } from "react";
import axios from 'axios';
import ResultsContainer from "../../components/ResultContainer/ResultContainer";



function PrivatePage() {

  const [savedBooks, setSavedBooks] = useState([]);



  useEffect(() => {
    axios.get("/api/books")
      .then(res => { setSavedBooks(res.data.reverse()) })
  }, [])


  return (
    <div>
      <ResultsContainer
        page="savedBooks"
        searchResults={savedBooks}
      />
    </div>
  );
}

export default PrivatePage;