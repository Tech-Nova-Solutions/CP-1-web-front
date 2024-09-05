import React from 'react';
import { ProdutosStyle } from '../css/ProdutosStyle';

const Produtos = () => {
  return (
    <ProdutosStyle>
      <img className='banner_campo' src="/src/assets/banner_campo.jpg" alt="banner_campo" />
      <h1>Conheça nossa Coleção de Produtos Esportivos!</h1>
    
      <h2>Bolas</h2>
      <div className='container_produtos'>
        <div className='produtos'>
          <img className='bola1' src='/src/assets/Bola.jpg' alt='Bola de Futebol (Campo)' />
          <div className='produto1'>
            <h3>Bola de Futebol (Campo)</h3>
            <p>R$113,99</p>
            <button>Comprar</button>
          </div>
        </div>

        <div className='produtos'>
          <img className='bola2' src='/src/assets/Bola2.jpg' alt='Bola de Futebol Americano' />
          <div className='produto2'>
            <h3>Bola de Futebol Americano</h3>
            <p>R$219,90</p>
            <button>Comprar</button>
          </div>
        </div>

        <div className='produtos'>
          <img className='bola3' src='/src/assets/Bola3.jpg' alt='Bola de Futebol (Quadra)' />
          <div className='produto3'>
            <h3>Bola de Futebol (Quadra)</h3>
            <p>R$81,92</p>
            <button>Comprar</button>
          </div>
        </div>
      </div>

      <h2>Bicicletas</h2>
      <div className='container_produtos'>
        <div className='produtos'>
          <img className='bicicleta1' src='/src/assets/Bicicleta1.jpg' alt='Bicicleta de Montanha' />
          <div className='produto4'>
            <h3>Bicicleta de Montanha</h3>
            <p>R$1.599,00</p>
            <button>Comprar</button>
          </div>
        </div>

        <div className='produtos'>
          <img className='bicicleta2' src='/src/assets/Bicicleta2.jpg' alt='Bicicleta Elétrica' />
          <div className='produto5'>
            <h3>Bicicleta Elétrica</h3>
            <p>R$4.999,00</p>
            <button>Comprar</button>
          </div>
        </div>

        <div className='produtos'>
          <img className='bicicleta3' src='/src/assets/Bicicleta3.jpg' alt='Bicicleta Urbana' />
          <div className='produto6'>
            <h3>Bicicleta Urbana</h3>
            <p>R$1.299,00</p>
            <button>Comprar</button>
          </div>
        </div>
      </div>
    
    </ProdutosStyle>
  );
}

export default Produtos;
