const projetos = [
  { id: 1, nome: "Piedade", desc: "Feita em Java" },
  { id: 2, nome: "Lista de Tarefas", desc: "Feita com React" },
  { id: 3, nome: "Portfólio", desc: "Feito com React + Vite" },
]

function Projetos() {
  return (
    <section id="projetos" style={{ padding: '4rem 2rem', background: '#f5f5f5' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Meus Projetos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
        {projetos.map((p) => (
          <div key={p.id} style={{
            background: '#fff',
            borderRadius: '8px',
            padding: '1.5rem',
            width: '220px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '0.5rem' }}>{p.nome}</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projetos
