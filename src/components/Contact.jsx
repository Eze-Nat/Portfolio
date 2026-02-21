import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>

      <p>
        Si querés trabajar conmigo o tenés alguna consulta, podés contactarme
        directamente.
      </p>

      <div className="contact-links">
        <a href="mailto:ezequielnatale.t@gmail.com">
          📧 Email
        </a>

        <a
          href="https://www.linkedin.com/in/ezequiel-natale/"
          target="_blank"
          rel="noreferrer"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://github.com/Eze-Nat"
          target="_blank"
          rel="noreferrer"
        >
          🧑‍💻 GitHub
        </a>
      </div>

      <div className="footer">
        © {new Date().getFullYear()} Ezequiel Natale
      </div>
    </section>
  );
};

export default Contact;