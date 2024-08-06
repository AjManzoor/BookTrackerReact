import { BookContext } from "../../contexts/BookContext";
import { useContext } from "react";

function LayoutCard({book}){


    const {books} = useContext(BookContext);

    console.log(books, "Boooooooooooks")


    return(
        (
            
        


            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12'>
            <div className='card card-height p-4 mt4'>
                <h3>{book.bookName}</h3>
               <h3>{book.author}</h3>
                
            </div>    
               
        </div>
        )
    )
}

export default LayoutCard