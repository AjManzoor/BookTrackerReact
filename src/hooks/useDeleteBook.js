function useDeleteBook(){

    async function deleteBook(data) {
        try {

          const response = await fetch(`https://localhost:7265/book?id=${data}`, {
            method: "DELETE",
          });
      
          const result = await response.json();
          console.log("Success:", result);
          return true;
        } catch (error) {
          console.error("Error:", error);
          return false;
        }
      }

      return {deleteBook}

}

export default useDeleteBook;