import "./stack.css";

const Stack = () => {
  return (
    <section id="stack" className="stack">
      <h2>Stack Técnico</h2>

      <div className="stack-grid">
        <div className="stack-card">
          <h3>Backend</h3>
          <ul>
            <li>.NET / ASP.NET Core</li>
            <li>Entity Framework Core</li>
            <li>JWT Authentication</li>
            <li>SQL Server / MySQL</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="stack-card">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>React Router</li>
            <li>Context API</li>
            <li>JavaScript (ES6+)</li>
          </ul>
        </div>

        <div className="stack-card">
          <h3>Herramientas</h3>
          <ul>
            <li>Git / GitHub</li>
            <li>Swagger</li>
            <li>Postman</li>
            <li>Netlify / Render</li>
            <li>Metodologías Ágiles</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stack;