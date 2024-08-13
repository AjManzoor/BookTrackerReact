import { createContext } from "react";

const BookContext = createContext();

function BookProvider({children, addBook, getBooks,books, setBooks, genres}){

    return(
        <BookContext.Provider
            value={{addBook, getBooks, books, setBooks, genres}}
        >
            {children}
        </BookContext.Provider>
    )
}

export {BookContext, BookProvider}