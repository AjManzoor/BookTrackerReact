import { useEffect, useRef } from "react";

function GenreComponent({id, deleteGenre, addGenreValue, updateGenreValue}){

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
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
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