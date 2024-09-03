import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <header className='nav'>
        <div className='container'>
            <h1>nome da loja</h1> 
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/produtos'>Produtos</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'>Contato</Link>
            </ul>

        </div>
        
    </header>
  )
}

export default Nav