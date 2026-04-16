const projetos = [
  {
    nome: 'Portfólio Profissional',
    descricao: 'Projeto desenvolvido para apresentar minhas informações profissionais, habilidades e experiências em uma página web moderna e organizada.',
    link: '#'
  },
  {
    nome: 'Servidor Caseiro',
    descricao: 'Configuração de serviços, monitoramento e aplicações em ambiente Linux com foco em desempenho e organização.',
    link: '#'
  },
  {
    nome: 'Automações Residenciais',
    descricao: 'Integrações e automações utilizando plataformas de casa inteligente para facilitar tarefas do dia a dia.',
    link: '#'
  }
];

const listaProjetos = document.getElementById('lista-projetos');

projetos.forEach((projeto) => {
  const card = document.createElement('article');
  card.className = 'project-card';

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a class="project-link" href="${projeto.link}" target="_blank" rel="noopener noreferrer">Ver mais</a>
  `;

  listaProjetos.appendChild(card);
});
