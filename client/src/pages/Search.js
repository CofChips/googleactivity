import React from "react";
import Banner from "../components/Banner/myBanner"
import ListContainer from "../components/ListContainer/ListContainer"
import { BookProvider } from "../utils/BookContext"
function Search() {

  return (
    <BookProvider>
      <Banner/>
      <ListContainer/>
    </BookProvider>
  );
}


export default Search;