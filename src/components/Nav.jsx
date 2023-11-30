import { NavLink } from "react-router-dom"
// import './nav.css'

function Nav(){
    return(
        <div className="nav-container">
            <NavLink className={'link'} to={'/'}>Home</NavLink>
            <NavLink className={'link'}to='/fav'>Favourites</NavLink>
        </div>
    )
}


export default Nav