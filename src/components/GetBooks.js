import { useEffect } from "react"

function GetBooks(){
    async function GetBooks(){
        try {
            const response = await fetch("https://localhost:7265/book", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
        
            const result = await response.json();
            console.log("Success:", result);
          } catch (error) {
            console.error("Error:", error);
          }
    }

    useEffect(() => {
        GetBooks()
        console.log("run")

   

    })

    return(
        


        <h1> These are the books</h1>
    )
}

export default GetBooks