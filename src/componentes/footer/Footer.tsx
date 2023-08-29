import'./Footer.css'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaLinkedin} from 'react-icons/fa';
import { FaWhatsapp} from 'react-icons/fa';

export default function Footer(){
  return(
    <footer className="footer">
    <div>
    <img src="/logo.samuel.png" alt="Logo da Empresa" className="footer-logo" />
     
    <p>&copy; 2023 Samuel Ortega desenvolvedor. Todos os direitos reservados.</p>
  </div>
        
      
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Termos de Uso</a>
          </li>
          <li>
            <a href="#">Política de Privacidade</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
          <FaFacebook/>
          </li>
          <li>
          <FaInstagram/>
          </li>
          <li>
          <FaLinkedin/>
          </li>
          <li>
          <FaWhatsapp/>
            </li>
        </ul>
      </div>
    </footer>

   
    
      
        
  )
}
