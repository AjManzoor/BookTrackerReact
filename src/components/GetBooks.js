import { BookProvider } from "../contexts/BookContext";
import useAddBook from "../hooks/useAddBook";
import useGetBooks from "../hooks/useGetBooks";
import LayoutCard from "./cards/LayoutCard";
import AddBookModal from "./AddBookModal";
import { useState } from "react";

function GetBooks(){

    const{addBook} = useAddBook();
    const{getBooks, books, setBooks} = useGetBooks();
    const [openModal, setOpenModal] = useState(false);

    return(
      <BookProvider addBook={addBook} getBooks={getBooks} books={books} setBooks={setBooks}>
            <div>
                <AddBookModal open={openModal}></AddBookModal>
                {books.map(function(book){
                    return(<LayoutCard book={book}/>)
                })}
            </div>
    </BookProvider>

    )
}

export default GetBooks