import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styled from 'styled-components'

export default function Limpar(props) {
  const limparMatches = () => {
    axios
      .put(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ayrton-oliveira-medrano/clear'
      )
      .then(() => {
        alert('Seus matches foram zerados')
        props.limparEstado()
      })
      .catch(err => {
        console.log(err)
      })
    props.pegarPerfil()
  }
  return <Botao onClick={() => limparMatches()}>Limpar Matches</Botao>
}

//Estilização Botão
const Botao = Styled.button`
padding: 4px 11px;
border: 1px solid #ffcc00;
-moz-border-radius: 8px;
-webkit-border-radius: 8px;
border-radius: 8px;
background-color: #861405 !important;
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FEBEB6), color-stop(100%,#861405)) !important;
background: -webkit-linear-gradient(top, #FEBEB6, ##861405) !important;
background: -moz-linear-gradient(top, #FEBEB6, ##861405) !important;
background: -ms-linear-gradient(top, #FEBEB6, ##861405) !important;
background: -o-linear-gradient(top, #FEBEB6, ##861405) !important;
font-family:"Segoe UI";
font-weight: bold;
color: #fff;
text-shadow: 0 1px 0 #666;
box-shadow: inset 0 1px 1px #fff, 0 2px 3px #666;
cursor:pointer;
position: absolute;
bottom: 2em;
left:11em;


:hover {
box-shadow: inset 0 2px 5px #fff, 0 2px 3px #666;
background: -webkit-gradient(linear, left top, left bottom, from(#FEBEB6), to(##861405)) !important;
}

:active{
box-shadow: inset 0 2px 5px #fff, 0 1px 3px #666 !important;
}
`
