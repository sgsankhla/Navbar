import { NavLink } from "react-router-dom"

export const Navbar = ()=>{
    return(
        <>
        <header>
            <div className="container">
                <div className="logo">
                    <NavLink to="/"> SurbhiSankhla</NavLink>
                </div>
                <nav>
                    <ul>
                        <li> <NavLink to="/">Home</NavLink></li>
                        <li> <NavLink to="/about">About</NavLink></li>
                        <li> <NavLink to="/Contact">Contact</NavLink></li>
                        <li> <NavLink to="/Login">Login</NavLink></li>
                        <li> <NavLink to="/Services">Services</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}
