import {Link} from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'

const Nav = () => {
  return (
    <NavStyle>
      <header className='nav'>
          <div className='container'>
              <h1>nome da loja</h1> 
              <ul>
                  <Link to='/' className="nav-link">Home</Link>
                  <Link to='/produtos' className="nav-link">Produtos</Link>
                  <Link to='/sobre' className="nav-link">Sobre</Link>
                  <Link to='/contato' className="nav-link">Contato</Link>
              </ul>

          </div>
          
      </header>
    </NavStyle>
  )
}

export default Nav