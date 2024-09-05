import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `

    :root{
        --azul: #002766;
        --azul-2: #004766;
        --verde: #006665;
        --verde-2: #00661f;
        --verde-3:#006642;
        --branco:#fff;
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