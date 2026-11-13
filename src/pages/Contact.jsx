import { contacts } from "../data/profile";
import { Eyebrow } from "../components/PageElements";

export default function Contact() {
  return (
    <section className="container page-section contact-page">
      <Eyebrow>CONVERSEMOS</Eyebrow>
      <h1>
        Las ideas crecen
        <br />
        <em>cuando se comparten.</em>
      </h1>
      <p className="page-intro">
        Un espacio para conversar sobre ciencia, datos, programación y nuevas
        preguntas.
      </p>
      <div className="contact-list">
        {contacts.map((contact, i) => (
          <div className="contact-row" key={contact.name}>
            <span className="number-label">0{i + 1}</span>
            <div>
              <h2>{contact.name}</h2>
              <p>{contact.description}</p>
              <p className="contact-value">{contact.value}</p>
            </div>
            {contact.url ? (
              <a
                className="text-link"
                href={contact.url}
                target={contact.url.startsWith("https://") ? "_blank" : undefined}
                rel={contact.url.startsWith("https://") ? "noopener noreferrer" : undefined}
                aria-label={
                  contact.url.startsWith("mailto:")
                    ? "Escribir un correo a Daniel Vertiz (abre tu aplicación de correo)"
                    : `Ver perfil de ${contact.name} (se abre en otra pestaña)`
                }
                title={
                  contact.url.startsWith("mailto:")
                    ? "Abre tu aplicación de correo"
                    : "Se abre en otra pestaña"
                }
              >
                {contact.url.startsWith("mailto:") ? "Escribir correo" : "Ver perfil"}
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="pending-contact">
                {contact.name === "Correo electrónico"
                  ? "Correo pendiente de añadir"
                  : "Enlace pendiente de añadir"}
              </span>
            )}
          </div>
        ))}
      </div>
      {contacts.some((contact) => !contact.url) && (
        <p className="muted">
          Los datos de contacto pendientes se mostrarán cuando estén confirmados.
        </p>
      )}
    </section>
  );
}
