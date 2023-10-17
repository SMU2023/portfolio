import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import Main from './componentes/main/Main';
import './main.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const ContatoForm = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [orcamento, setOrcamento] = useState('');

  return (
    <>
      <Header />
      <div className="container">
        <h1>Formulário de Contato</h1>
        <form>
          <div>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <p>Nome: {nome}</p>
          </div>

          <div>
            <input
              type="text"
              placeholder="Sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
            <p>Sobrenome: {sobrenome}</p>
          </div>

          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Email: {email}</p>
          </div>

          <div>
            <input
              type="number"
              placeholder="Insira o orçamento total"
              value={orcamento}
              onChange={(e) => setOrcamento(e.target.value)}
            />
            <p>Orçamento Total: {orcamento}</p>
          </div>

          <div>
            <input type="submit" value="Criar projeto" />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    ),
  },
  {
    path: '/sobre',
    element: (
      <>
        <Header />
        <div className="content-main">Página Sobre!</div>
        <Footer />
      </>
    ),
  },
  {
    path: '/noticias',
    element: (
      <>
        <Header />
        <div className="content-main">Noticias</div>
        <Footer />
      </>
    ),
  },
  {
    path: '/contato',
    element: <ContatoForm />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
