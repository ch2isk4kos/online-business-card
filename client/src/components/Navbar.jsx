import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <a href="#home">
        <FontAwesomeIcon icon="house" />
      </a>
      <a href="#projects">
        <FontAwesomeIcon icon="laptop-code" />
      </a>
      <a href="#about">
        <FontAwesomeIcon icon="address-card" />
      </a>
      <a href="#contact">
        <FontAwesomeIcon icon="paper-plane" />
      </a>
    </nav>
  );
};

export default Navbar;
