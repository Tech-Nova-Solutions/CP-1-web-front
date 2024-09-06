import styled from 'styled-components';

export const  HomeStyle = styled.section `

    .container{
        width: 100%;
        min-height: 100vh;
        display:flex;
        flex-direction: column;
        align-items: center;
        
       
    }
    .boas-vindas{
        width: 100%;
        height: 40vh;
        background-image: url(src/assets/banner.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position:center top;
        display: flex;
        justify-content: space-between;
        align-items: center ;
    }
    .boas-vindas p{
        padding: 40px 120px;
        font-size: 2rem;
        font-family: monospace;
        text-transform: uppercase;
        font-weight: 500;
        text-shadow: 0 0 10px var(--azul-claro),
                    0 0 20px var(--azul-claro),
                    0 0 10px var(--azul-claro);
        

        
    }
    .boas-vindas .slogan{
        padding-right: 70px;
        text-shadow: 0 0 10px var(--azul-claro),
                    0 0 20px var(--azul-claro),
                    0 0 10px var(--azul-claro);

    }
    .esportes{
        width: 90%;
        min-height: 40vh;
        display: flex;
        flex-direction: column;
        margin-top:30px;
        margin-bottom:10px;
        border-radius: 50px;
        justify-content: center;
        align-items: center;
        gap:70px;
        background: radial-gradient(circle, var(--azul-2), var(--rosa), transparent 70%);
        animation: expandGradient  2s ease-in-out infinite alternate;

    }
    .esportes p{
        font-size: 2.2rem;
        font-family: sans-serif;
        text-shadow: 0 0 10px var(--azul-claro),
        0 0 10px var(--azul-claro);
       
    }
    .esportes .btn{
        width: 20%;
        height: 50px;
        background:var(--azul);
        color: var(--rosa);
        border:none;
        border-radius: 20px;
        font-family: monospace;
        font-size: 1.2rem;
        display: flex;
        justify-content:center;
        align-items: center;

    }
    .esportes .btn:hover{
        background: #0d2f73;
        box-shadow: 0 0 15px var(--rosa-escuro);
        
    }

   @media(min-width:1300px){
    .boas-vindas{
        background-position: center 15%;
    }
    
   }
   @keyframes expandGradient{
        0%{
            background-size: 200% 200%;
            background-position:center;
            
        }
        50% {
                background-size: 300% 300%;
                background-position:center;
                
            }
        100% {
            background-size: 400% 400%;
            background-position:center;
            
        }
   }


`