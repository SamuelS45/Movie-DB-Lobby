import {useState, useContext } from "react";
// import Card from '../components/card.css'
import MovieContext from "./Movie.Context";
import '../components/card.css'
// import { TbFaceIdError as NoImage } from "react-icons/tb";


function Home(){
        const favHandler=(items)=>{
            const inFav = fav.includes(items)
            const favTrigger = ()=>{
                alert('Already in Favourites List')
            }
            inFav==true?
                favTrigger()
            :setFav([...fav, items])
        }
        const deleteFavHandler=(items)=>{
            const inFav = fav.includes(items)

            const favTrigger = ()=>{
                // alert('Already in Favourites List')
                setFav(current=>{
                    return current.filter(favMov=>favMov!==items)
                })
            }

            inFav==true?
                favTrigger()
            :setFav([...fav, items])
        }

        
        const pageHandler=(id)=>{
            setPage(id)
    }
    
    const {handleAPI,handleSearch,search, movies} = useContext(MovieContext)

    const moviesMap = movies.map((items)=>
    
    <div key={items.id} style={{
    }} className="card-container">
        <img style={{
            width:'200px'
        }} src={items.backdrop_path==null?'https://www.nxp.com/assets/images/en/logos-internal/image-not-available.svg':`https://image.tmdb.org/t/p/w500/${items.backdrop_path}`}></img>
        <div className="card-text">
            <h4
            style={{
                margin:'5px'
            }}>{items.title}</h4>
            <h4 style={{
                margin:'5px'
            }}>{items.name}</h4>
            {/* <h3>{fav}</h3> */}
            <div>
            {
                items.release_date?<p style={{
                    margin:'5px'
                }}>Released {items.release_date}</p>:<p style={{
                    margin:'5px'
                }}>Aired {items.first_air_date==''?'N/A':items.first_air_date}</p>
            }
            </div>
        </div>
        <div>{
            <button onClick={()=>favHandler(items)} className="card-btn">{'+ to Favourites'}</button>
            }</div>
    </div>
    )

    const[page, setPage] = useState(undefined)
    const [fav, setFav] = useState([])
    const favMap = fav.map((items)=>
    
    <div key={items.id} style={{
    }} className="card-container">
        <img style={{
            width:'200px'
        }} src={items.backdrop_path==null?'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png':`https://image.tmdb.org/t/p/w500/${items.backdrop_path}`}></img>
        <div className="card-text">
            <h3>{items.title}</h3>
            <h3>{items.name}</h3>
            {/* <h3>{fav}</h3> */}
            <div>
            {
                items.release_date?<p>Released {items.release_date}</p>:<p>Aired {items.first_air_date==''?'N/A':items.first_air_date}</p>
            }
            </div>
        </div>
        <div>{
            <button className={'delete-button'} onClick={()=>deleteFavHandler(items)}>{'- from Favourites'}</button>
            }</div>
    </div>
    )
    // const favMap = fav.map((items)=><button key={items.id} onClick={()=>favHandler(items)}>{items.title||items.name}</button>)
    // const moviesMap = movies.map((items)=><button key={items.id} onClick={()=>favHandler(items)}>{items.title}</button>)
    return(
        <div className="home-container">
            {/* <Nav/> */}
            <div className="nav-container">

                <button className="nav-link" onClick={()=>pageHandler(undefined)}>Home</button>
                <button className="nav-link" onClick={()=>pageHandler('Hi')}>Fav</button>

            </div>
            <div style={{
                height:search==''?'0px':'100px',
                transition:'.5s'
            }}>
                <h1>{search}</h1>
            </div>
            <div className="movie-poster">
            {page==undefined?moviesMap:favMap}
            </div>
        </div>
    )
}

export default Home