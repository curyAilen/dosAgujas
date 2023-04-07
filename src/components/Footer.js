const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <ul className=" col-12 d-flex">
          <li className="list-unstyled me-4 text-reset">
            2023 - Copyright &copy; - Ailen Cury
          </li>
          <li className="list-unstyled me-4 text-reset">
            <a className=" " href="https://www.facebook.com/people/Craff-Multimedia/pfbid09v8YbCc6W6F6fF3kSBeYnRtKTb9qE751FnNdbhU3M6iw4mMLLpxE6tefsV3ey4DFl/?mibextid=ZbWKwL">
              <img src="/images/FC.png" alt="" width="35" height="35"></img>
            </a>
          </li>
          <li className="list-unstyled me-4 text-reset">
            <a className="" href="https://www.instagram.com/ailen.cury/">
              <img src="/images/ig.png" alt="" width="35" height="35"></img>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
