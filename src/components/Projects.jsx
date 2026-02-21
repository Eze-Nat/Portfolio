import "./projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>Ecommerce Perfumes</h3>
          <p>
            Aplicación fullstack con autenticación JWT, panel administrativo y
            despliegue en producción.
          </p>

          <div className="tech">
            React • Node • JWT • Netlify • Render
          </div>

          <div className="project-buttons">
            <a href="https://eccomerce-perfumes.netlify.app/" target="_blank">
              Demo
            </a>
            <a href="https://github.com/Eze-Nat/eccomercePerfumes" target="_blank">
              Frontend
            </a>
            <a href="https://github.com/Eze-Nat/ecommercePerfumesAPI" target="_blank">
              Backend
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>SmartWallet API</h3>
          <p>
            API REST desarrollada con Clean Architecture, autenticación JWT y
            Entity Framework Core.
          </p>

          <div className="tech">
            .NET • EF Core • JWT • SQL Server
          </div>

          <div className="project-buttons">
            <a href="https://github.com/Eze-Nat/SmartWalletBackend" target="_blank">
              Repo
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>SmartWallet Frontend</h3>
          <p>
            Aplicación React conectada a la API SmartWallet con rutas protegidas
            y manejo de estado.
          </p>

          <div className="tech">
            React • Context API • REST
          </div>

          <div className="project-buttons">
            <a href="https://github.com/Eze-Nat/SmartWalletFr" target="_blank">
              Repo
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>CN Carpintería</h3>
          <p>
            Sitio corporativo en desarrollo para cliente real con catálogo de
            productos.
          </p>

          <div className="tech">
            React • Diseño Responsive
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;