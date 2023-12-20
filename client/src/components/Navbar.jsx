import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <a href="#first">
        <FontAwesomeIcon icon="house" />
      </a>
      <a href="#second">
        <FontAwesomeIcon icon="laptop-code" />
      </a>
      <a href="#third">
        <FontAwesomeIcon icon="address-card" />
      </a>
      <a href="#fourth">
        <FontAwesomeIcon icon="paper-plane" />
      </a>
    </nav>
  );
};

export default Navbar;
