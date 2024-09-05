import React from 'react';
import { Link } from 'react-router-dom';
import { FooterStyle } from '../css/FooterStyle'; 

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-section">
        <div>
          <h2 className="footer-title">Nome da Loja</h2>
          <Link to="/sobre" className="footer-link">Sobre Nós</Link>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
        </div>
        
        <div>
          <h2 className="footer-title">Compras</h2>
          <a href="#" className="footer-link">Termos de Compra</a>
          <a href="#" className="footer-link">Garantia</a>
          <a href="#" className="footer-link">Recomendações</a>
        </div>
        
        <div>
          <h2 className="footer-title">Fale Conosco</h2>
          <Link to="/contato" className="footer-link">Contato</Link>
          <a href="mailto:atendimento@nomedaloja.com" className="footer-link">atendimento@nomedaloja.com</a>
          <a href="tel:+551112345678" className="footer-link">(11)1234-5678</a>
        </div>
      </div>

      <div className="footer-copyright">
        <h5>@2024 - Todos os direitos reservados.</h5>
      </div>
    </FooterStyle>
  );
};

export default Footer;
