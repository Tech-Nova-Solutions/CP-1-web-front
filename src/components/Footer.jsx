import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div>
            <h2>Nome da Loja</h2>
          </div>
          <div>
            <Link to='/sobre'>Sobre Nós</Link>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div>
            <h3>Compras</h3>
          </div>
          <div>
            <a href="/termos-de-compra">Termos de Compra</a>
            <a href="/garantia">Garantia</a>
            <a href="/recomendacoes">Recomendações</a>
          </div>
          <div>
            <h3>Fale Conosco</h3>
          </div>
          <div>
            <Link to='/contato'>Contato</Link>
            <a href="mailto:atendimento@nomedaloja.com">atendimento@nomedaloja.com</a>
            <a href="tel:+551112345678">(11)1234-5678</a>
          </div>
        </div>
        <h5>&copy; 2024 - Todos os direitos reservados.</h5>
      </footer>
    </>
  )
}

export default Footer
