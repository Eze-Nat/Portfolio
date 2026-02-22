import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo"><a href="#hero" className="logo">EN</a></div>

        <div className="nav-links">
          <a href="#about">Sobre mí</a>
          <a href="#stack">Stack</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;