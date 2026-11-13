import { Eyebrow } from "../components/PageElements";

export default function NotFound() {
  return (
    <section className="container page-section">
      <Eyebrow>404</Eyebrow>
      <h1>Esta página no está aquí.</h1>
      <p className="page-intro">Puedes seguir explorando desde el inicio.</p>
      <a className="button" href="#/">
        Volver al inicio →
      </a>
    </section>
  );
}
