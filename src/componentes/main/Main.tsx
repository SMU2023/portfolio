import './Main.css'
function Main(){   
   return(
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
                <h2 className="titulo">MINHAS <span>ESPECIALIDADES.</span></h2>
                <div className="flex">
                    <div className="especialidades-box">
                        <i className="bi bi-code-square"></i>
                        <h3>Website</h3>
                        <p>Minha missão é transformar ideias em realidade digital. 
                        Com criatividade e técnicas inovadoras, crio websites cativantes que elevam a presença online dos meus clientes. 
                        Vamos destacar sua marca na web!</p>
                    </div>

                    <div className="especialidades-box">
                        <i className="bi bi-cart"></i>
                        <h3>Loja online</h3>
                        <p>Combinando design atrativo e funcionalidade sólida, estou aqui para construir a plataforma perfeita para impulsionar o seu negócio na internet. 
                        Vamos transformar visitantes em clientes satisfeitos!</p>
                    </div>

                    <div className="especialidades-box">
                        <i className="bi bi-wordpress"></i>
                        <h3>Blog</h3>
                        <p> Tenho experiencia no desenvolvimento de blogs que realmente marcam presença. 
                        Se você busca compartilhar suas ideias ou conhecimentos de forma envolvente e acessível, estou aqui para transformar sua visão em um blog atraente e funcional. 
                        Vamos criar um espaço digital que inspire e informe!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="sobre">

        </section>

        <section className="portfolio">
            <div className="interface">
                <h2 className="titulo">MEU <span>PORTFÓLIO.</span></h2>
               
            </div>
        </section>

      
    </div>
   
   ) 
    
}
export default Main