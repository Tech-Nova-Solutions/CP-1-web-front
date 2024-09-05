import styled from 'styled-components';

export const SobreStyle = styled.div `

.container_sobre{
    width:100%;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:60px 40px;
    gap:100px;

}
.container_sobre h1{
    font-size: 2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-transform: uppercase;
    color: var(--rosa-escuro);
    text-shadow: 0 0 10px var(--azul-claro),
                6px 6px 20px var(--azul-claro);


}
.sobre{
    display: grid;
    grid-template-areas:
    "text-1 text-1 img img"
    "text-2 text-2 img img"
    ".   .    .    ."
    ".   .    .    ."
    "img2 img2 text-3 text-3"
    "img2 img2 text-4 text-4"
    ".   .     text-5 text-5";
    grid-template-columns: 4 1fr;
    grid-template-rows: 4;
    grid-row-gap: 30px;
    grid-column-gap: 60px;
}
.sobre p{
    text-align:justify;
    font-size: 1.2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
}

.text-1{
    grid-area: text-1;
}
.text-2{
    grid-area:text-2;

}
.text-3{
    grid-area:text-3;
}
.text-4{
    grid-area:text-4;
}
.text-5{
    grid-area: text-5;
}
.img{
    grid-area:img;
}
.img2{
    grid-area:img2;
}

`