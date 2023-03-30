import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center justify-content-center">
      <ul className="nav nav-pills navbar-right">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-light"
            href="https://baconsale.com/"
            rel="noreferrer"
            target="_blank"
          >
            My Podcast
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/movies">
            List of Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
