import React from 'react'
import Styled from 'styled-components'
import Logo from '../assets/Capturar.png'
import Button1 from '../assets/button1.png'
import Internet from '../assets/3g.png'
import Wifi from '../assets/wi-fi.png'
import Bateria from '../assets/battery.png'

export default function Header(props) {
  return (
    <>
      <BarraDireita>
        <Icones src={Internet} />
        <Icones src={Wifi} />
        <Icones src={Bateria} />
      </BarraDireita>
      <Cabecalho>
        <Image src={Logo} alt="Texto Astrodev com fundos de coração" />
        <Button
          onClick={props.trocandoEstado}
          src={Button1}
          alt="imagem de um coracao e 2 celulares"
        />
      </Cabecalho>
      <hr />
    </>
  )
}

//Estilização
const Cabecalho = Styled.div`
  display: flex;
  justify-content: space-between;
  width:400px;
  
`
const Image = Styled.img`
max-width:200px;
max-height:100px;

`
const Button = Styled.img`
max-width:32px;
max-height:32px;
margin-top:20px;
cursor: pointer;
transition: all .5s;
&:hover {
  transform: scale(1.5);
 }

`
const BarraDireita = Styled.div`
margin-top:0;
display: flex;
justify-content:right;

`
const Icones = Styled.img`
margin-top:0;
margin-right:0;
padding-right:8px;
`
