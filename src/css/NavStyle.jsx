import styled from 'styled-components'


export const NavStyle = styled.header `

    .nav{
        width: 100%;
        height: 70px;  
        background:var(--verde);
    }
    .nav .container{
        display:flex;
        padding:20px 80px;
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
        color: bisque;
    }
    .nav-link:hover{
        font-size: 1.3rem;
        transition: 0.3s ;
        color: #8e7544;

    }


`