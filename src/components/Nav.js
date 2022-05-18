const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list list-reset">
        <li className="nav-item">
          <a href="#">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Messages
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Music
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
