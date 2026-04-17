const projetos = [
   { id: 4, nome: "Piedade", desc: "Site e app de atendimento a jovens em momento de crise psicossomática" },
  { id: 2, nome: "Lista de Tarefas", desc: "Feita com React" },
  { id: 3, nome: "Portfólio", desc: "Feito com React + Vite" },
]

function Projetos() {
  return (
    <section>
      <h2>Meus Projetos</h2>
      {projetos.map((p) => (
        <div key={p.id}>
          <h3>{p.nome}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  )
}

export default Projetos
