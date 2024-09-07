import styled from 'styled-components'

export const ContatoStyle = styled.section`

.pagina-contato{
    width:100%;
    height: 100vh;
    display:flex;
    justify-content: space-between;
    align-items: center;
    
    
}

.container_info{
    width: 40%;
    min-height:600px;
    padding:20% 5%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    
    
}
.container_info h2{
    color:var(--rosa-escuro);
    text-shadow: 0 0 15px var(--azul-claro),
                0 0 15px var(--azul-claro),
                0 0 15px var(--azul-claro),
                0 0 15px var(--azul-claro),
                0 0 15px var(--azul-claro),
                0 0 15px var(--azul-claro);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    text-transform:uppercase;
   

}

.info{
    display:flex;
    width:300px;
    height:100px;
    justify-content: center;
    align-items: center;
    gap: 30px;
    
}
.info p{
    font-size: 1.2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    
}
.info img{
    width:45px;
    height:45px;
}
.container_contato{
    width:50%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    background: var(--azul-2);
    align-self: center;
    border-radius: 30px 0 0 30px;
    //box-shadow: ;
    gap:50px;
   
}
.container_contato h2{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    color:var(--azul);
    text-shadow: 0 0 15px var(--rosa),
    0 0 15px var(--rosa),
    0 0 15px var(--rosa);
}
.contato{
    display: flex;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    gap:40px;
    justify-content: space-between;
    align-items: baseline;
    
}
.contato label{
    height:40px;

}
.contato input{
    height: 30px;
    width:70%;
    border-radius: 30px;
    text-align:center;
    border:none;
    box-shadow: 0 0 10px var(--rosa-escuro),
                0 0 10px var(--rosa-escuro);
    outline-color: var(--rosa-escuro);
}
.contato textarea{
    width: 250px;
    height:80px;
    text-align:center;
    border:none;
    box-shadow: 0 0 10px var(--rosa-escuro),
                0 0 10px var(--rosa-escuro);
    outline-color: var(--rosa-escuro);
}
form {
    width: 70%;
    min-height: fit-content;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.btn_enviar{
    width:250px;
    height:40px;
    align-self: center;
    margin-top:40px;
    border-radius:30px;
    border:2px solid var(--rosa-escuro);
    background: var(--azul-claro);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
}
.btn_enviar:hover{
    background:var(--rosa);
    box-shadow: 0 0 15px var(--rosa-escuro),
    0 0 15px var(--rosa-escuro),
    0 0 15px var(--rosa-escuro);
}


`