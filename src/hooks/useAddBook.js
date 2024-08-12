function useAddBook(){

    async function addBook(data) {
        try {

          console.log(data)

          const response = await fetch("https://localhost:7265/book", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          console.log("Success:", result);
          return true;
        } catch (error) {
          console.error("Error:", error);
          alert("failed to add")
          return false;
        }
      }

      return {addBook}

}

export default useAddBook;