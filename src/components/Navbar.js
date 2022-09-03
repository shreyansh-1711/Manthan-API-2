import React from 'react';
// import { Link } from 'react-router-dom';
import "./Navbar.css";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    // <header className='navbar'>
    //     <div className='navbar_title navbar_item'> <Link to="/home" style={{fontSize:
    //     "40px",marginRight:"500px"}}>Home</Link> </div>
    //     <div className='navbar__item'><Link to="/form" style={{fontSize:
    //     "40px"}}>FORM</Link></div>
        
    // </header>
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/home" className="nav-logo">
            MANTHAN
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={ handleClick }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/form"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick }
              >
                Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
               onClick={ handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
       
        </div>
        <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bar" }></i>
          </div>
      </nav>
    </ div>
  )
}

export default Navbar
