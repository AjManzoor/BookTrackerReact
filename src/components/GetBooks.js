import { BookProvider } from "../contexts/BookContext";
import useAddBook from "../hooks/useAddBook";
import useGetBooks from "../hooks/useGetBooks";
import LayoutCard from "./cards/LayoutCard";

function GetBooks(){

    const{addBook} = useAddBook();
    const{getBooks, books, setBooks} = useGetBooks();

    return(
      <BookProvider addBook={addBook} getBooks={getBooks} books={books} setBooks={setBooks}>
            <div>
                {books.map(function(book){
                    return(<LayoutCard book={book}/>)
                })}
            </div>
    </BookProvider>

    )
}

export default GetBooks