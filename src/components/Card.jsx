import { useContext } from "react"
import './card.css'
import FavContext from "../Pages/Fav.Context";

function Card({data}){
    const {backdrop_path, title, release_date, first_air_date, name} = data||{};
    const {fav} = useContext(FavContext)
    return(
        <div style={{
        }} className="card-container">
            <img style={{
                width:'200px'
            }} src={backdrop_path==null?'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png':`https://image.tmdb.org/t/p/w500/${backdrop_path}`}></img>
            <div className="card-text">
                <h3>{title}</h3>
                <h3>{name}</h3>
                <h3>{fav}</h3>
                <div>
                {
                    release_date?<p>Released {release_date}</p>:<p>Aired {first_air_date==''?'N/A':first_air_date}</p>
                }
                </div>
            </div>
            <button className="card-btn">+ Favourite</button>
        </div>
    )
}

export default  Card