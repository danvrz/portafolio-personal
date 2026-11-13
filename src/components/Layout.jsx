const navigation = [
  ["/", "Inicio"],
  ["/proyectos", "Proyectos"],
  ["/sobre-mi", "Sobre mí"],
  ["/contacto", "Contacto"],
];
export function Header({ route }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#/" className="brand" aria-label="Daniel Vertiz, inicio">
          <span className="monogram">
            dv<span>.</span>
          </span>
          <span>Daniel Vertiz</span>
        </a>
        <nav aria-label="Navegación principal">
          {navigation.map(([path, name]) => (
            <a
              key={path}
              href={`#${path}`}
              aria-current={
                (path === "/" ? route === "/" : route.startsWith(path))
                  ? "page"
                  : undefined
              }
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer container">
      <a className="footer-name" href="#/">
        Daniel Vertiz<span>Física, datos y código.</span>
      </a>
      <p>Un espacio en construcción, con curiosidad como punto de partida.</p>
      <a href="#/contacto">
        Hablemos <span aria-hidden="true">↗</span>
      </a>
    </footer>
  );
}
