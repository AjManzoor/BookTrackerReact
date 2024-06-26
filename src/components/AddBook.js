import { useState, useEffect } from 'react';

function AddBook(){

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("")
    const [isFicton , setIsFiction] = useState(false)
    const [startDate, setStartDate] = useState("");
    const [finishDate, setFinishDate] = useState("");

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
      
      postBook(dataToSend)
    }

    async function postBook(data) {
        try {
          const response = await fetch("https://localhost:7265/book", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          console.log("Success:", result);
        } catch (error) {
          console.error("Error:", error);
        }
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