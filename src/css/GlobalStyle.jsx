import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `

    :root{
        --azul:#091740;
        --azul-2:#117DBF;
        --azul-claro:#1BDDF2;
        --rosa-claro:#F25EBF;
        --rosa:#F23D7F;
        --rosa-escuro: #BF0B3B;
    }

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style:none;
    text-decoration: none;
}
html{
    scroll-behavior: smooth;
}

body{
    display:grid;
    grid-template-areas:
        "nav nav nav nav"
        "home home home home"
        "footer footer footer footer"
    
    grid-template-columns: repeat (5, 1fr);
    grid-template-rows: repeat(5);
    font-size:1rem;

    


}

`
export default GlobalStyle