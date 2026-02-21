import "./about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Sobre mí</h2>

      <div className="about-content">
        <p>
          Soy desarrollador fullstack con foco en backend .NET. Tengo experiencia
          desarrollando APIs REST con autenticación JWT, arquitectura limpia y
          manejo de bases de datos relacionales.
        </p>

        <p>
          En frontend trabajo con React creando aplicaciones SPA modernas,
          integradas con APIs propias y desplegadas en entornos productivos
          utilizando Netlify y Render.
        </p>

        <p>
          Me enfoco en escribir código claro, estructurado y escalable,
          aplicando buenas prácticas y separación de responsabilidades.
        </p>
      </div>
    </section>
  );
};

export default About;