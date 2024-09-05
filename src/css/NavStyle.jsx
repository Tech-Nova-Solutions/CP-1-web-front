import styled from 'styled-components'


export const NavStyle = styled.header `

    .nav{
        width: 100%;
        height: 70px;  
        background:var(--azul);
        color: var(--azul-claro);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;
        font-size: 2rem;
        text-shadow: 0 0 10px var(--rosa-escuro),
                     0 0 20px var(--rosa-escuro),
                     0 0 10px var(--rosa-escuro);
        
    
    }
    .nav .container{
        display:flex;
        padding:15px 80px;
        justify-content: space-between;
        align-items: center;
        

    }
    .container ul{
        width: 50%;
        display: flex;
        justify-content: space-around;
        
       
        
    }
    
    .nav-link{
        font-size: 1.1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--rosa);
    }
    .nav-link:hover{
        font-size: 1.3rem;
        transition: 0.3s ;
        color: var(--rosa-claro);

    }


`