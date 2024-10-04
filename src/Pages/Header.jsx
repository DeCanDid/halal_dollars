import React from 'react';
import '../Pages/Style.css';
import './Header.css'
import { Link } from 'react-router-dom';
import hala_logo from '../images/halal-dollar-loo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faBell, faCircleQuestion, faNavicon, faClose  } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
{/*     
        <header>
            <div className="header_col1">
                
                <div className="logo_col">
                    <img src={hala_logo} alt="" />
                </div>

                <div className="name_col">
                    <h4>Halal Dollars</h4>
                </div>

            </div>

            <div className="header_col2">
                <a href="#">Home</a>
                <a href="#">Affiliate</a>
                <a href="#">FutureWealth</a>
                <a href="#">TotalReach</a>
            </div>

            <div className="header_col3">
                <a href="#">
                    <FontAwesomeIcon icon={faCircleQuestion} />
                </a>

                <a href="#">
                    <FontAwesomeIcon icon={faBell} />
                </a>

                <a href="#">
                    <FontAwesomeIcon icon={faGear} />
                </a>
            </div>
        </header> */}

<header 
style={{backgroundColor:'#001F5C'}} id='main_nav' 
class="navbar navbar-expand-lg shadow ">

<div className="container-fluid logo_col">
                    <img src={hala_logo} alt="" />

                    <h4>Halal Dollars</h4>
{/* <Link to='' className="navbar-brand horizon" href="#">HORIZON</Link> */}


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Halal Dollars</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
      <FontAwesomeIcon icon={faClose} style={{
        color: 'white', fontSize: 'x-large'
      }} />
    </button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li class="nav-item">
        <Link to='' id='nav_link' class="nav-link mx-lg-2 active" aria-current="page" >Home</Link>
      </li>

      <li class="nav-item">
        <Link to='' id='nav_link' class="nav-link mx-lg-2" href="#">Affiliate</Link>
      </li>

      <li class="nav-item">
        <Link to='future-wealth' id='nav_link' class="nav-link mx-lg-2">FutureWealth</Link>
      </li>

      <li class="nav-item">
        <Link to='total-reach' id='nav_link' class="nav-link mx-lg-2" href="#">TotalReach</Link>
      </li>

      <div className="header_col3 mt-2">
                <a href="#">
                    <FontAwesomeIcon icon={faCircleQuestion} />
                </a>

                <a href="#">
                    <FontAwesomeIcon icon={faBell} />
                </a>

                <Link to="setting">
                    <FontAwesomeIcon icon={faGear} />
                </Link>
            </div>
      
    </ul>
   
  </div>
</div>


<button id='navbar_toggler' className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon toggle_icon">
      <FontAwesomeIcon icon={faNavicon} />
  </span>
</button>
</div>
</header>
    </>
  )
}

export default Header