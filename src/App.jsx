import './App.css'
import { useRef, useState } from 'react';
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation';
import MainContent from './components/MainContent';
import Pagination from './components/Pagination';

function App() {
  const [productsPerPage, setProductsPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)

  const [value, setValue] = useState(getRandomLocation())
  const url = `https://rickandmortyapi.com/api/location/${value}`;
  const [location, hasError] = useFetch(url)

  const totalproducts = location?.residents.length
  const inputLocation = useRef()

  const handleSumbit = (event) => {
    event.preventDefault()
    setValue(inputLocation.current.value)
    // console.log(event.target.firstChild.value)
  }

  return (
    <div className='app'>
      <img className='background_image' src='./fondo.png' alt='fondo' />
      <img className='background_letter' src='./letra_de_fondo.png' alt='fondo' />

      <h1 className='app__title'>Rick and Morty</h1>
      <form onSubmit={handleSumbit} className='app__form'>
        <input type='number' ref={inputLocation} className='app__input' min="1" />
        <button className='app__btn'>Search</button>
      </form>
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalproducts={totalproducts} />
      {
        hasError ?

          <h2 className='app__error'>Hey! you must provide an id from 1 to 126</h2>

          :
          <MainContent location={location} currentPage={currentPage} productsPerPage={productsPerPage} />
      }
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalproducts={totalproducts} />
    </div>
  )
}

export default App
