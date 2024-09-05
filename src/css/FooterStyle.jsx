import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background-color: var(--azul); 
  padding: 40px 0;
  color: var(--rosa-escuro);
  text-align: center;

  .footer-section {
    display: flex;
    justify-content: space-around;
    text-align: left;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-title {
    font-weight: bold;
    margin-bottom: 20px;
  }

  .footer-link {
    color: var(--rosa);
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    transition: color 0.3s;
  }

  .footer-link:hover {
    color: var(--rosa-claro); 
  }

  .footer-copyright {
    text-align: center;
    margin-top: 20px;
    font-size: 0.9em;
  }
`
