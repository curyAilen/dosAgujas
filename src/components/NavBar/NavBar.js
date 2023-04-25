import './navBar.css';
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

const Header = () => {  
  return (
    <header className="header">
   
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/">
            <img src="/images/dosagujas.png" height="55" alt="Dos Agujas Logo" loading="lazy" ></img>
            </Link>    
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="Mantas" className="nav-link link" >Mantas</Link>
              <Link to="Gorros" className="nav-link link" >Gorros</Link>
              <Link to="Bufandas" className="nav-link link" >Bufandas</Link>                           
              <Link to="Mitones" className="nav-link link" >Mitones</Link>
            </ul>
          </div>
          <CartWidget />         
            <Link to="/cuenta" className=" align-items-center text-reset me-3" >
            <img src="/images/user.png" height="30" alt="Dos Agujas Logo" loading="lazy" ></img>
            </Link>
           
    </div>
   
  

</nav>
    </header>
  );
};

export default Header;
