import Styled from 'styled-components'

//Estilização
export const CardPerfil = Styled.div`
  text-align: center;
  justify-content: center;
  border: 52px solid black;
  border-radius:10%;
  max-height: auto;
  min-height: 60vh;
  width: 400px;
  height: auto;
  padding: 16px;
  color:#861405 ;
  font-family:roboto,sans-serif;
  font-size: 18px;
  background-color:white;
  position: relative;

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
export const Lista = Styled.div`
display: flex;
flex-direction: row;
padding:10px;
`

export const Foto = Styled.img`
border-radius:50%;
width:64px;
height:64px;
`
export const Texto = Styled.p`
margin-left:5%;
border-bottom:1px solid #861405;`
