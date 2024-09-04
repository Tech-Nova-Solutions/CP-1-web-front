import React from 'react'

const Produtos = () => {
  return (

    <>

    <div className='container_produtos'>
      <div>
        <div className='produtos'>
          <img className='bola1' src='/src/assets/Bola.jpg' alt='Produto 1' />
          <div className='produto1'>
            <h3>Nome do produto</h3>
            <p>Preco do produto</p>
          </div>
        </div>

        <div className='produtos'>
          <img className='bola2' src='/src/assets/Bola2.jpg' alt='Produto 1' />
          <div className='produto2'>
            <h3>Nome do produto</h3>
            <p>Preco do produto</p>
          </div>
        </div>

        <div className='produtos'>
          <img className='bola3' src='/src/assets/Bola3.jpg' alt='Produto 3' />
          <div className='produto3'>
            <h3>Nome do produto</h3>
            <p>Preco do produto</p>
          </div>
        </div>
      </div>
      

      <div className='produtos'>
          <img className='bicicleta3' src='/src/assets/Bicicleta1.jpg' alt='Produto 4' />
          <div className='produto4'>
            <h3>Nome do produto</h3>
            <p>Preco do produto</p>
          </div>
        </div>

        <div className='produtos'>
          <img className='bicicleta3' src='/src/assets/Bicicleta2.jpg' alt='Produto 5' />
          <div className='produto5'>
            <h3>Nome do produto</h3>
            <p>Preco do produto</p>
          </div>
        </div>

        <div className='produtos'>
          <img className='bicicleta3' src='/src/assets/Bicicleta3.jpg' alt='Produto 6' />
          <div className='produto6'>
            <h3>Nome do produto</h3>
            <p>Preco do produto</p>
          </div>
        </div>


    </div>


    </>
  )
}

export default Produtos