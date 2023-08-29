import './Header.css'
function Header(){
    return(
        <header>
            <div>
            <img src = "/logo.samuel.png" alt ="logo"></img>
      <p>Desenvolvedor e Web Designer</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Página inicial</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Notícias</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header