import React from 'react';

const Contato = () => {
  return (
    <>

    <div className='informacoes_container'>
      <h2>Informações da loja</h2>
      <div className='informacoes'>
        <p>Numero: </p>
        <p>Endereco: </p>
        <p>Whatsapp: </p>
        <p>Email: </p>

      </div>
    </div>

    <div className = "contato_container">
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

    </>
  )
}

export default Contato;