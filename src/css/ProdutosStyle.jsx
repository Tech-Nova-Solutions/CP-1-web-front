import styled from 'styled-components';

export const ProdutosStyle = styled.div`
  h1 {
    margin-top: 30px;
    text-align: center;
    margin-bottom: 40px;
    color: black;
  }

  h2 {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
    color: black;
  }

  .container_produtos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 100px;
  }

  .produtos {
    background-color: var(--verde);
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 300px;
  }

  .produtos img {
    width: 100%;
    height: 250px; /* Definido tamanho fixo */
    object-fit: cover; /* Garante que a imagem preencha o espaço sem distorção */
    border-radius: 10px;
  }

  .produto1, .produto2, .produto3, .produto4, .produto5, .produto6 {
    margin-top: 15px;
  }

  .produto1 h3, .produto2 h3, .produto3 h3, .produto4 h3, .produto5 h3, .produto6 h3 {
    font-size: 18px;
    color: bisque;
  }

  .produto1 p, .produto2 p, .produto3 p, .produto4 p, .produto5 p, .produto6 p {
    font-size: 16px;
    color: bisque;
  }

  /* Estilização do botão "Comprar" */
  button {
    background-color: bisque;
    color: var(--verde);
    padding: 10px 50px;
    border: none;
    border-radius: 30px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: white;
  }
`;
