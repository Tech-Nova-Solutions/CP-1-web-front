import styled from 'styled-components';

export const ProdutosStyle = styled.section`

  .container{
    width:100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items:center;
    
  
  }
  .container h1{
    padding:20px;
    font-size: 2.5rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    color:var(--rosa);
    text-shadow: 0 0 10px var(--azul-claro),
                 0 0 10px var(--azul-claro);
  }
  .container h2{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    padding:20px;
    color: var(--rosa-escuro);
    font-size:1.9rem;
    text-shadow: 0 0 15px var(--azul-claro),
    0 0 15px var(--azul-claro),
    0 0 15px var(--azul-claro);
    
    
  }
  
  .banner_campo{
    width: 100%;
    
  }
  .container_produtos{
    width:100%;
    min-height:40vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap:10px;

  }
  .produtos{
    width:320px;
    min-height:350px;
    background: var(--rosa-escuro);
    border-radius:20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:20px;
    padding:20px;
    
  }
  .produtos:hover{
    box-shadow:0 0 15px var(--azul-claro),
    0 0 15px var(--azul-claro),
    0 0 15px var(--azul-claro),
    0 0 15px var(--azul-claro);
    transition:0.2s;
  }
  .produtos img{
    width:250px;
    border-radius:20px;
    
  }
  .bola1{
    height:250px;
  }
  .produtos_texto{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
  
  }
  .produtos_texto h3{
    font-weight: 500;
    color:var(--azul);
    font-size: 1.3rem;
  }

  .produtos_texto p{
    font-size: 1.2rem;
    color:var(--azul-claro);
    text-shadow: 0 0 10px var(--rosa-claro);
  }
  .btn-comprar{
    width:90px;
    height:30px;
    border-radius: 20px;
    border:none;
    background: var(--azul-claro);
    color: var(--azul);
    text-transform:uppercase;
    font-size: 0.7rem;
    font-weight: 800;
  }
.btn-comprar:hover{
  box-shadow: 0 0 15px var(--rosa-claro),
  0 0 15px var(--rosa-claro),
  0 0 15px var(--rosa-claro);
  cursor: pointer;
  color:var(--rosa-escuro);
}
    
    
 

  
`;
