import { BookProvider } from "../contexts/BookContext";
import useAddBook from "../hooks/useAddBook";
import useGetBooks from "../hooks/useGetBooks";
import LayoutCard from "./cards/LayoutCard";

function GetBooks(){

    const{addBook} = useAddBook();
    const{getBooks, books} = useGetBooks();

    return(
      <BookProvider addBook={addBook} getBooks={getBooks} books={books}>
            <div>
                {books.map(function(book){
                    return(<LayoutCard book={book}/>)
                })}
            </div>
    </BookProvider>

    )
}

export default GetBooks