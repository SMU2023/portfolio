import { useState } from 'react';
import './Main.css';

function Main() {
  const [searchTerm, setSearchTerm] = useState('');

  const especialidades = [
    {
      id: 1,
      title: 'Website',
      description: 'Minha missão é transformar ideias em realidade digital. Com criatividade e técnicas inovadoras, crio websites cativantes que elevam a presença online dos meus clientes. Vamos destacar sua marca na web!',
      image: '/ubs.png' // Adiciona o caminho para a imagem do website
    },
    {
      id: 2,
      title: 'Loja online',
      description: 'Combinando design atrativo e funcionalidade sólida, estou aqui para construir a plataforma perfeita para impulsionar o seu negócio na internet. Vamos transformar visitantes em clientes satisfeitos!',
      image: '/lojaonline.png' // Adicione o caminho para a imagem da loja online
    },
    {
      id: 3,
      title: 'Blog',
      description: 'Tenho experiencia no desenvolvimento de blogs que realmente marcam presença. Se você busca compartilhar suas ideias ou conhecimentos de forma envolvente e acessível, estou aqui para transformar sua visão em um blog atraente e funcional. Vamos criar um espaço digital que inspire e informe!',
      image: '/blog.png' // Adiciona o caminho para a imagem do blog
    },

  ];

  const filteredEspecialidades = especialidades.filter((especialidade) =>
    especialidade.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className="topo-do-site">
      <div className="interface">
                <div className="flex">
                    <div className="txt-topo-site">
                        
                        <h1>TRANSFORMANDO IDEIAS EM REALIDADE DIGITAL<span>.</span></h1>
                        <p>Olá sou Samuel da SIlva Ortega estudante do Instituto Federal de Mato Grosso do Sul - IFMS, seja bem vindo ao meu portifólio onde
                           criatividade e inovação andam lado a lado com uma combinação única de design impactante, funcionalidade intuitiva e otimização para resultados, estou pronto para criar o projeto online dos seus sonhos.</p>

                        <div className="btn-contato">
                            <a href="#">
                                <button>Entre em contato</button>
                            </a>
                        </div>
                    </div>

                    <div className="img-topo-site">
                        <img src="/images-removebg.png" alt=""></img>
                    </div>
                </div>
            </div>
      </section>

      <section className="especiliadades">
        <div className="interface">
          <h2 className="titulo">
            MINHAS <span>ESPECIALIDADES.</span>
          </h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Pesquisar especialidades..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex">
            {filteredEspecialidades.map((especialidade) => (
              <div className="especialidades-box" key={especialidade.id}>
                <div className="especialidade-image">
                  <img src={especialidade.image} alt={especialidade.title} />
                </div>
                <h3>{especialidade.title}</h3>
                <p>{especialidade.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sobre">
        {/* ... Seu código existente ... */}
      </section>

      <section className="portfolio">
      <div className="interface">
               
               </div>
      </section>
    </div>
  );
}

export default Main;
