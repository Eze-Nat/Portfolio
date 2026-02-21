import "./hero.css";

const Hero = () => {
  return (
    <section className="hero fade-in">
      <div className="hero-content">
        <h1>Ezequiel Natale</h1>
        <h2>Fullstack Developer (.NET & React)</h2>

        <p>
          Desarrollo APIs robustas con autenticación JWT y aplicaciones web
          modernas desplegadas en producción.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            Ver proyectos
          </a>
          <a href="#contact" className="btn secondary">
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;