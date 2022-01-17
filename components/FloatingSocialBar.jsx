const FloatingSocialBar = () => {
  return (
    <div className="position-fixed d-none d-md-block" style={{zIndex: 2, left: 0, top: "20vh"}}>
      <nav className="socialBar">
        <ul>
          <li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-github"></i>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-youtube"></i>
              <span>Youtube</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FloatingSocialBar;
