import { useEffect, useState } from "react";

function useGetBooks(){

    const [books, setBooks] = useState([]);

    async function getBooks(){
        try {
            const response = await fetch("https://localhost:7265/book", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
        
            const result = await response.json();
            console.log("Success:", result);
            setBooks(result)
          } catch (error) {
            console.error("Error:", error);
          }
    }

    useEffect(() => {
        getBooks()
    }, [])

    return {getBooks, books, setBooks}

}

export default useGetBooks;