import React from 'react'
import futebol from '../assets/futebol.jpg'
import volei from '../assets/voleii.jpg'
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
              <h2>Sejam Bem-Vindos à Qualquer Nome</h2>
              <img src="" alt="boas-vindas" />
          </div>
          <div className='esportes'>
              <p>Lugar certo para os amantes de esporte!</p>
              
              <img src= {futebol} alt="futebol" />
              <img src={volei} alt="volei" />
              <img src={academia} alt="academia" />
              <img src={tenis} alt="tenis" />
              <img src={corrida} alt="corrida" />
          </div>
        
      </section>
    </HomeStyle>
  )
}

export default Home