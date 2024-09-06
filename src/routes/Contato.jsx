import React from 'react';
import { ContatoStyle } from '../css/ContatoStyle';
import pin from '../assets/pin-map.png'
import mail from '../assets/mail.png'
import zap from '../assets/zap.png'
import phone from '../assets/phone.png'

const Contato = () => {
  return (
    <ContatoStyle>
      <section className='pagina-contato'>

        <div className='container_info'>
          <h2>Informações da Loja</h2>
          
            <div className='info'>
              <img src={phone} alt="" /> 
              <p>11 1234-5678 </p>
            </div>
            <div className='info'>
              <img src={pin} alt="" />
              <p>Rua 1, Bela Vista, São Paulo.</p>
            </div >
            <div className='info'>
              <img src={zap} alt="" /> 
              <p>11 91234-5678</p>
            </div>
            <div className='info'>
              <img src={mail} alt="" />
              <p> atendimento@tnsports.com </p>
            </div>
            
        </div>
        

        <div className = "container_contato">
          <h2>Entre em Contato Conosco</h2>
          <form action = "#" method = "post">
            <div className = "contato">
              <label htmlFor = "name">Nome:</label> 
              <input type = "text" id = "name" required placeholder = "Seu nome"/>
            </div>
            <div className = "contato">
              <label htmlFor = "email">E-mail:</label>
              <input type = "email" id="email" name="email" required placeholder = "Seu e-mail"/>
            </div>
            <div className = "contato">
              <label htmlFor = "subject">Assunto:</label>
              <input type = "text" id = "subject" name = "subject" required placeholder = "Assunto"/>
            </div>
            <div className = "contato">
              <label htmlFor = "message">Mensagem:</label>
              <textarea id = "message" name = "message" required placeholder = "Sua mensagem"/>
            </div>
            <button className='btn_enviar' type = "submit">Enviar</button>
          </form>
        </div>

      </section>
    </ContatoStyle>
  )
}

export default Contato;