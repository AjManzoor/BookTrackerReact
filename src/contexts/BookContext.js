import { createContext } from "react";

const BookContext = createContext();

function BookProvider({children, addBook, getBooks,books, setBooks}){

    return(
        <BookContext.Provider
            value={{addBook, getBooks, books, setBooks}}
        >
            {children}
        </BookContext.Provider>
    )
}

export {BookContext, BookProvider}