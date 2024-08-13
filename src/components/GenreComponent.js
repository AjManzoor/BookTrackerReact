import { useEffect, useRef } from "react";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";


function GenreComponent({id, deleteGenre, addGenreValue, updateGenreValue}){

    const {genres} = useContext(BookContext);
    console.log(genres, "genres")

    const hasAddedValue = useRef(false);

    useEffect(() => {

        if (!hasAddedValue.current) {
            addGenreValue(id); // Call with the correct ID
            hasAddedValue.current = true; // Set to true after adding
        }

    }, [addGenreValue, id])

    return(
<label> Add Genre
    <select name="cars" id="cars" onChange={(e) => updateGenreValue(id,e.target.value)}>
    <option value="">Please select an option</option>
        {genres.map((genre) => 
            <option key={genre.id} value={genre.id}>{genre.genreName}</option>
        )}

      
    </select>

     {id !== 0?  <button onClick={(e) => { 
        e.preventDefault()
        deleteGenre(id)
        }}>Delete {id}</button> : ""}
    <br></br>

    
    
    </label>
    )
}

export default GenreComponent;