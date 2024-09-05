import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background-color: var(--verde); 
  padding: 40px 0;
  color: bisque;
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
    color: bisque;
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    transition: color 0.3s;
  }

  .footer-link:hover {
    color: #8e7544; 
  }

  .footer-copyright {
    text-align: center;
    margin-top: 20px;
    font-size: 0.9em;
  }
`
