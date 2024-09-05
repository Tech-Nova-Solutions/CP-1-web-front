import styled from 'styled-components';

export const  HomeStyle = styled.section `

    .container{
        width: 100%;
        min-height: 100vh;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-between;
       
    }
    .boas-vindas{
        width: 95%;
        height: 50vh;
        background-image: url(src/assets/banner.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position:center top;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end ;
    }
    .boas-vindas p{
        padding: 40px 180px;
        font-size: 3rem;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-transform: uppercase;
        font-weight: 500;
        


    }
    .esportes{
        width: 100%;
        min-height: 40vh;
        display: flex;
        flex-direction: column;
        margin-top:30px;
        margin-bottom:10px;
        justify-content: center;
        align-items: center;
        gap:70px;
        background-image: radial-gradient(circle, var(--azul-2), var(--rosa));

    }
    .esportes p{
        font-size: 2.5rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
       
    }

   


`