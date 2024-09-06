import React from 'react';
import { ProdutosStyle } from '../css/ProdutosStyle';

const Produtos = () => {
  return (
    <ProdutosStyle>
      <section className='container'>
      <img className='banner_campo' src="/src/assets/banner_campo.jpg" alt="banner_campo" />
      <h1>Conheça nossa Coleção de Produtos Esportivos!</h1>
    
      <h2>Bolas</h2>
      <div className='container_produtos'>
        <div className='produtos'>
          <img className='bola1' src='/src/assets/Bola.jpg' alt='Bola de Futebol (Campo)' />
          <div className='produtos_texto'>
            <h3>Bola de Futebol (Campo)</h3>
            <p>R$113,99</p>
            <button className='btn-comprar'>Comprar</button>
          </div>
        </div>

        <div className='produtos'>
          <img className='bola2' src='/src/assets/Bola2.jpg' alt='Bola de Futebol Americano' />
          <div className='produtos_texto'>
            <h3>Bola de Futebol Americano</h3>
            <p>R$219,90</p>
            <button className='btn-comprar'>Comprar</button>
          </div>
        </div>

        <div className='produtos'>
          <img className='bola3' src='/src/assets/Bola3.jpg' alt='Bola de Futebol (Quadra)' />
          <div className='produtos_texto'>
            <h3>Bola de Futebol (Quadra)</h3>
            <p>R$81,92</p>
            <button className='btn-comprar'>Comprar</button>
          </div>
        </div>
      </div>

      <h2>Bicicletas</h2>
      <div className='container_produtos'>
        <div className='produtos'>
          <img className='bicicleta1' src='/src/assets/Bicicleta1.jpg' alt='Bicicleta de Montanha' />
          <div className='produtos_texto'>
            <h3>Bicicleta de Montanha</h3>
            <p>R$1.599,00</p>
            <button className='btn-comprar'>Comprar</button>
          </div>
        </div>

        <div className='produtos'>
          <img className='bicicleta2' src='/src/assets/Bicicleta2.jpg' alt='Bicicleta Elétrica' />
          <div className='produtos_texto'>
            <h3>Bicicleta Elétrica</h3>
            <p>R$4.999,00</p>
            <button className='btn-comprar'>Comprar</button>
          </div>
        </div>

        <div className='produtos'>
          <img className='bicicleta3' src='/src/assets/Bicicleta3.jpg' alt='Bicicleta Urbana' />
          <div className='produtos_texto'>
            <h3>Bicicleta Urbana</h3>
            <p>R$1.299,00</p>
            <button className='btn-comprar'>Comprar</button>
          </div>
        </div>
      </div>
      </section>
    
    </ProdutosStyle>
  );
}

export default Produtos;
