import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import { Route, Routes } from 'react-router-dom';
import GetBooks from './components/GetBooks'
import Home  from './components/Home';
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/GetBooks" element={<GetBooks />} />
      <Route path="/AddBook" element={<AddBook />} />
    </Routes>
    </>
  );
}

export default App;
