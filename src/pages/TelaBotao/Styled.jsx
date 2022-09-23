import Styled from 'styled-components'

//Styled
export const CardPerfil = Styled.div`
  text-align: center;
  justify-content: center;
  border: 52px solid black;
  border-radius:10%;
  max-height: auto;
  width: 400px;
  padding: 16px;
  color:#861405 ;
  font-family:roboto,sans-serif;
  font-size: 18px;
  background-color: white;
  `
export const Container = Styled.div`
width: 100%;
height: 100vh;
display:flex;
align-items: center;
justify-content: center;
background-color: #f9f9f9;
opacity: 1;
background-image:  radial-gradient(#861405 1.9500000000000002px, transparent 1.9500000000000002px), radial-gradient(#861405 1.9500000000000002px, #f9f9f9 1.9500000000000002px);
background-size: 78px 78px;
background-position: 0 0,39px 39px;
`
export const Espacamento = Styled.div`
height:300px;
`