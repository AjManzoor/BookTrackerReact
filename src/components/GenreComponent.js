function GenreComponent({id, deleteGenre}){

    return(
<label> Add Genre
    <select name="cars" id="cars" onChange={(e) => alert(e.target.value)}>
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