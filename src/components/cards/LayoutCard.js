import { BookContext } from "../../contexts/BookContext";
import { useContext } from "react";
import useDeleteBook from "../../hooks/useDeleteBook";

function LayoutCard({book}){

    const {setBooks} = useContext(BookContext);
    const {deleteBook} = useDeleteBook();

    return(
        (
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12'>
            <div className='card card-height p-4 mt4'>
                <h3>{book.bookName}</h3>
               <h3>{book.author}</h3>
               <h1 onClick={()=> {deleteBook(book.id).then((res) => {
                if(!res) return;
                setBooks((prevBooks) => prevBooks.filter((book2) => book2.id !== book.id))}) }}
                >{book.id}</h1>
            </div> 

               
        </div>
        )
    )
}

export default LayoutCard