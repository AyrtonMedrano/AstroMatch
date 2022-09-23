import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import Header from '../components/Header'
import Like from '../assets/like.png'
import Dislike from '../assets/dislike.png'
import TelaBotao from '../pages/TelaBotao/TelaBotao'

//Styled
const CardPerfil = Styled.div`
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
const Foto = Styled.img`
max-width:300px;
max-height:300px;
border-radius: 10%;
-webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
`

const Container = Styled.div`
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
const StyledButton = Styled.img`
padding-right: 40px;
padding-left: 40px;
cursor: pointer;
transition: all .5s;

:hover {
  -webkit-transform: scale(1.5);
    transform: scale(1.5);
 }

`

//Functions
export default function Perfil(props) {
  const [perfil, setPerfil] = useState({})

  //Get profiles
  const pegarPerfil = () => {
    axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ayrton-oliveira-medrano/person'
      )
      .then(res => {
        setPerfil(res.data.profile)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    pegarPerfil()
  }, [])

  //Enviar Id
  const enviarMatches = () => {
    console.log(perfil.id)
    const match = {
      id: perfil.id,
      choice: true
    }
    axios
      .post(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ayrton-oliveira-medrano/choose-person',
        match
      )
      .then(res => {
        if (res.data.isMatch) {
          alert('Temos um match!!!')
        }
        pegarPerfil()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Container>
      {perfil ? (
        <CardPerfil>
          <Header trocandoEstado={props.trocandoEstado} />
          <Foto src={perfil.photo} alt={perfil.photo_alt} />
          <h2>
            {perfil.name}, {perfil.age}
          </h2>
          <p>{perfil.bio}</p>
          <StyledButton src={Dislike} onClick={pegarPerfil} />
          <StyledButton src={Like} onClick={enviarMatches} />
        </CardPerfil>
      ) : (
        <TelaBotao pegarPerfil={pegarPerfil} />
      )}
    </Container>
  )
}
