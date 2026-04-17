function Header() {
  return (
    <header style={{ background: '#1e1e2e', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ color: '#fff', fontSize: '1.2rem' }}>Djames Silva</h1>
      <nav>
        <a href="#sobre" style={{ color: '#ccc', marginRight: '1.5rem', textDecoration: 'none' }}>Sobre</a>
        <a href="#projetos" style={{ color: '#ccc', textDecoration: 'none' }}>Projetos</a>
      </nav>
    </header>
  )
}

export default Header