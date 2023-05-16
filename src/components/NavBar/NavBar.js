import './navBar.css';
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import { useContext } from "react"
import { contexto } from "../CustomProvider"

const Header = () => {  
  const { producto, userName } = useContext(contexto)

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
            <Link as={Link} to="/">
            <img src="/images/dosagujas.png" height="55" alt="Dos Agujas Logo" loading="lazy" ></img>
            </Link>    
            <p>{userName}</p>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link as={Link} to="/categoria/Mantas" className="nav-link link" >Mantas</Link>
              <Link as={Link} to="/categoria/Gorros" className="nav-link link" >Gorros</Link>
              <Link as={Link} to="/categoria/Bufandas" className="nav-link link" >Bufandas</Link>                           
              <Link as={Link} to="/categoria/Mitones" className="nav-link link" >Mitones</Link>
            </ul>
          </div>
          <CartWidget />         
            <Link to="/cart" className=" align-items-center text-reset me-3" >
            <img src="/images/user.png" height="30" alt="Dos Agujas Logo" loading="lazy" ></img>
            </Link>
           
    </div>
   
  

</nav>
    </header>
  );
};

export default Header;
