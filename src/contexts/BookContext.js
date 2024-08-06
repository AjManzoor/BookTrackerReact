import { createContext } from "react";

const BookContext = createContext();

function BookProvider({children, addBook, getBooks,books}){


    return(
        <BookContext.Provider
            value={{addBook, getBooks, books}}
        >
            {children}
        </BookContext.Provider>
    )
}

export {BookContext, BookProvider}