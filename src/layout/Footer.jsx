function Footer() {
    return  <footer className="page-footer teal lighten-2">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} oraclethirteen
      <a className="grey-text text-lighten-2 right" href="https://github.com/oraclethirteen">repository</a>
      </div>
    </div>
  </footer>
}

export { Footer };