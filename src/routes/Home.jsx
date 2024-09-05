import React from 'react'
import futebol from '../assets/futebol.jpg'
import volei from '../assets/volei.webp'
import academia from '../assets/academia.jpg'
import corrida from '../assets/corrida.jpg'
import tenis from '../assets/tenis.jpg'
import {HomeStyle} from '../css/HomeStyle'

const Home = () => {

  return (
    <HomeStyle>
      <section className='container'>
          {/*um banner com boas vindas*/}
          <div className='boas-vindas'>
            <p>nome da loja </p>
            
          </div>
          <div className='esportes'>
              <p>Lugar certo para os amantes de esporte!</p>
              
              
          </div>
        
      </section>
    </HomeStyle>
  )
}

export default Home