import React from 'react'
import {HomeStyle} from '../css/HomeStyle'

const Home = () => {

  return (
    <HomeStyle>
      <section className='container'>
          {/*um banner com boas vindas*/}
          <div className='boas-vindas'>
            <p>TN Sports </p>
            <p className="slogan">Faça acontecer</p>
            
          </div>
          <div className='esportes'>
              <p>Lugar certo para os amantes de esporte!</p>
              <a href="/sobre" className="btn">Saiba Mais</a>
              
              
          </div>
        
      </section>
    </HomeStyle>
  )
}

export default Home