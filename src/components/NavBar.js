import CartWidget from "./CartWidget"
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
            
              <img src="/images/dosagujas.png" height="55" alt="Dos Agujas Logo" loading="lazy" ></img>
            

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link link" href="#">
                  Mantas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link" href="#">
                  Gorros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link" href="#">
                  Bufandas 
                </a>
              </li>
              <li className="nav-item">
                
                <a className="nav-link link" href="#">
                  Mitones
                </a>
              </li>
              
            </ul>

          </div>
          <CartWidget />
         
            <a className=" align-items-center text-reset me-3" href="#">
            <img src="/images/user.png" height="30" alt="Dos Agujas Logo" loading="lazy" ></img>
            </a>
           
    </div>
   
  

</nav>
    </header>
  );
};

export default Header;
