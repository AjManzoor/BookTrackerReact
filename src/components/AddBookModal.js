import Modal from './layout/Modal';
import useAddBook from '../hooks/useAddBook';
import { BookContext } from '../contexts/BookContext';
import { useState, useEffect, useContext } from 'react';
import GenreComponent from './GenreComponent';
import StarsRatingComponent from './StarsRatingComponent';


function AddBookModal(){

    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("")
    const [isFicton , setIsFiction] = useState(false)
    const [startDate, setStartDate] = useState("");
    const [finishDate, setFinishDate] = useState("");
    const {addBook} = useAddBook();
    const [genres, setGenres] = useState([0]);
    const [genreValues, setGenreValues] = useState([])
    const {books, setBooks, getBooks} = useContext(BookContext);
    const [rating, setRating] = useState(0);

    useEffect(()=> {

      console.log(genreValues)

    },[genreValues])


    useEffect(()=> {

    },[])


    const handleSubmit = (event) => {
      event.preventDefault();

      const genreValueArr = genreValues.map((genre) => genre.value)

      console.log(genreValueArr, "gva")

      let dataToSend = 
      {
        BookName : name,
        Author : author,
        Fiction : isFicton,
        StartDate : startDate,
        FinishDate : finishDate,
        Genres : genreValueArr     
      };
      
      addBook(dataToSend).then(() => 
      {
          getBooks()
          setShowModal(false);
          resetModalValues()

      })
    }

    const resetModalValues = () =>{
        setName("")
        setAuthor("")
        setIsFiction(false)
        setStartDate("");
        setFinishDate("");
        setGenres([0])
        setGenreValues([])
        setRating(0)
    }

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
      resetModalValues()
    };

    const handleAddGenre = (event) => {
      event.preventDefault();
      const sortedGenres = genres.sort((a, b) => a - b);
      const largestValue = parseInt(sortedGenres[sortedGenres.length - 1])
      setGenres([...genres, largestValue + 1])

    }

    const deleteGenre = (id) => {
      const newGenres = genres.filter(item => item !== id);
      setGenres(newGenres)
      const newGenreValues = genreValues.filter(item => item.id !== id);
      setGenreValues(newGenreValues);

    }

    const addGenreValue = (id) =>{

      const valueToAdd = {id : id, value : ""}
      const newGenreValues = [...genreValues,valueToAdd];
      setGenreValues(newGenreValues)
    }

    const updateGenreValue = (id, value) => {

      setGenreValues((items) => items.map((item) => item.id === id ?  {...item, ...{id : id, value : value}} : item ))
    }
  
    return (
      <div className="App">
        <button onClick={openModal}>Add Book</button>
  
        <Modal show={showModal} onClose={closeModal}>
          <h2>Add book</h2>
          <form onSubmit={handleSubmit}>
          <label>Enter book name:
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br></br>
          <label>Enter author:
            <input 
              type="text" 
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
          <br></br>
          <label> Fiction?
        <input
          type="checkbox"
          checked={isFicton}
          onChange={e => setIsFiction(!isFicton)}
        />
      </label>
      <br></br>
      <label> Date Started
      <input aria-label="Date" 
      type="date" 
      onChange={(e) => setStartDate(e.target.value)}
      />
      </label>
      <br></br>
      <label> Date Finished
      <input aria-label="Date" 
      type="date"
      onChange={(e) => setFinishDate(e.target.value)}
      />
      </label>

      <br></br>

    {console.log(genres, "genres")}

    {genres.map((item, index) => 
      
        <GenreComponent key={index} id={item} 
          deleteGenre={deleteGenre} 
          addGenreValue={addGenreValue}
          updateGenreValue={updateGenreValue}
        >
        </GenreComponent>
    )}
    <button onClick={(e) => {handleAddGenre(e)}}>Add Genre</button>

    <h3>Rating: <StarsRatingComponent starsNum={5} rating={rating} setRating={setRating}></StarsRatingComponent></h3>
    <br></br>

      <br></br>
          <input type="submit" />
        </form>
        </Modal>
      </div>
    );
}

export default AddBookModal;