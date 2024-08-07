import { useState, useEffect } from 'react';
import useAddBook from '../hooks/useAddBook';

function AddBook(){

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("")
    const [isFicton , setIsFiction] = useState(false)
    const [startDate, setStartDate] = useState("");
    const [finishDate, setFinishDate] = useState("");
    const {addBook} = useAddBook();

    useEffect(()=> {

      console.log(startDate)

    },[startDate])

    useEffect(()=> {

      console.log(finishDate)

    },[finishDate])

    const handleSubmit = (event) => {
      event.preventDefault();

      let dataToSend = 
      {
        BookName : name,
        Author : author,
        Fiction : isFicton
      };
      
      addBook(dataToSend)
    }

    return (
      <>
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
          <input type="submit" />
        </form>
      </>
      )


};

export default AddBook;