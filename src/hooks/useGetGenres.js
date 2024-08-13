import { useEffect, useState } from "react";

function useGetGenres(){

    const [genres, setGenres] = useState([]);

    async function getGenres(){
        try {
            const response = await fetch("https://localhost:7265/Genre", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
        
            const result = await response.json();
            console.log("Success:", result);
            setGenres(result)
          } catch (error) {
            console.error("Error:", error);
          }

          
    }

    useEffect(() => {
        getGenres()
    }, [])


    return {getGenres: getGenres, genres: genres, setGenres: setGenres}
}

export default useGetGenres;