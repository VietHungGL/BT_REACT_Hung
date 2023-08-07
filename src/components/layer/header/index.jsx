import { Link, useLocation } from "react-router-dom";
import { AUTH, LOCATION } from "constants/index";

import "./header.css";
function Header(props) {
  const location = useLocation();
  console.log("««««« location »»»»»", location);
  return (
    <header className="App-header header-format">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={LOCATION.HOME}>
            Trang Chủ
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {AUTH.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname.includes(item.path) ? "disabled" : ""
                    }`} // đoạn này sử lý khi bấm vào sẽ k được bấm được nữa bởi nó có disabled
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
