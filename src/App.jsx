
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Fav from './Pages/Fav'
import MovieContext from './Pages/Movie.Context.jsx'
import FavContext from './Pages/Fav.Context.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const[search, setSearch] = useState('')
  const[movies, setMovies] = useState([])
  const[fav, setFav] = useState([])
      
  const handleAPI = async ()=>{
      const info ={
          method:'GET',
          url:`https://api.themoviedb.org/3/trending/all/day?api_key=bc03ddbb3f3c8d80d4303b77c7f00db0`,
      }
      
      await axios(info).then(res=>{
          setMovies(res.data.results)
          console.log(res.data.results)
          // console.log(res.data)
          // console.log(res.data.results[0])
          setSearch('')
          // console.log(movies.results[0])
      }
          ).catch((err)=>console.log(err))
      // console.log(movies[0].results)
      
  }
  const handleSearch = async()=>{
      const info ={
          method:'GET',
          url:`https://api.themoviedb.org/3/search/movie?api_key=bc03ddbb3f3c8d80d4303b77c7f00db0&query=${search}`,
      }
      search==''?alert('Type text in search'):

      await axios(info).then(res=>{
          setMovies(res.data.results)
          console.log(res.data.results)
          // console.log(res.data)
          // console.log(res.data.results[0])
          // console.log(movies.results[0])
      }
          ).catch((err)=>console.log(err))
  }

  const addFav=(newFav)=>{
    setFav(...fav=> [fav,newFav])
  }
  useEffect(()=>{
      handleAPI()      
  },[])
  return(
    <div className='app-container'>
      <div className='logo-container'>
        <img className='logo' alt='logo' src='https://i.pinimg.com/originals/17/5d/c2/175dc2e5b9e85b298d5ea9c6af256bae.png'></img>
        <h1>Movie DB Lobby</h1>
      </div>
      <div className='search-container'>
        <form className='form-container'>
                <input className="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Movie"></input>
                  <button onClick={handleSearch}>Search</button>
                  <button className='delete-button' onClick={handleAPI}>Clear</button>
        </form>
            </div>
    {/* <Nav/> */}
      <Routes>

        <Route path='/' element={
          
      <FavContext.Provider value={{fav, addFav}}>
          <MovieContext.Provider value={{search, movies,}}>
            <Home/>
        </MovieContext.Provider>
      </FavContext.Provider>
        
      }></Route>
        <Route path='/fav' element={
          <Fav/>
        
        }></Route>
      </Routes>
    {/* <Home/> */}
    </div>
  )
}

export default App
