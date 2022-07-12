import React, {useEffect, useState} from 'react';
import './App.css';
import{ getBooksApi, addBookApi, updateBookApi, deleteBookApi } from './apis/books';
import TableBook from './app/TableBook';
import CreateBook from './app/CreatBook';

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooksApi().then(response => setBooks(response));
  }, []);

  const addBook = (book) => {
    return addBookApi(book)
      .then(data => {
        setBooks([...books,data])
      });
  }

  const updateBook = (book) => {
    return updateBookApi(book)
    .then(data => {
      return data;
    })
  }

  const deleteBook = (id) => {
    return deleteBookApi(id)
      .then(data => {
        if(data.deletedCount === 1){
          setBooks(books.filter(book => book._id !== id));
        }
      });
  }

  return (
    <div className="App">
      <CreateBook onCreate = {addBook}/>
      <TableBook books={books} onDelete = {deleteBook} onUpdate = {updateBook}/>
    </div>
  );
}

export default App;
