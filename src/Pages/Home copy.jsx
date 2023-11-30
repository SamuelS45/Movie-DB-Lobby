import React, { useEffect, useState, useContext } from "react";
import Card from '../components/Card'
import './home.css'
import axios from "axios";
import Nav from '../components/Nav'
import MovieContext from "./Movie.Context";
// const data= [
//     {title:'Love'},
//     {title:'Love'},
// ]


function Home(){
    const[search, setSearch] = useState('')
    const[movies, setMovies] = useState([])
    // const[data, setData] = useState([
    //     {title:'Love'},
    //     {title:'Love'},
    // ])

    const {movies, count, inc} = useContext(MovieContext)

    const handleAPI = async ()=>{
        const info ={
            method:'GET',
            url:`https://api.themoviedb.org/3/trending/all/day?api_key=bc03ddbb3f3c8d80d4303b77c7f00db0`,
            // url:'https://jsonplaceholder.typicode.com/todos/1'
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
            // url:'https://jsonplaceholder.typicode.com/todos/1'
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

    useEffect(()=>{
        handleAPI()
        
        
        // console.log('Fuck off')
    },[])
    // console.log(movies)
    const moviesMap = movies.map((items)=><Card key={items.id} data={items}/>)
    return(
        <div className="home-container">
            <div>
                <input className="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Movie"></input>
                <button onClick={handleSearch}>Search</button>
                <button onClick={handleAPI}>Clear</button>
                <button onClick={inc}>INC</button>
            </div>
                <div>{count}</div>
            <Nav/>
            <h1>{search}</h1>
            <div className="movie-poster">
            {moviesMap}
            </div>
        </div>
    )
}

export default Home