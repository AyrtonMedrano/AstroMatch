import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import axios from 'axios'
import Limpar from '../../components/Limpar'
import { Lista, Foto, Texto, Container, CardPerfil } from './Styled'

export default function Matches(props) {
  const [matchUsuario, setMatchUsuario] = useState([])

  const pegarMatches = () => {
    axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ayrton-oliveira-medrano/matches'
      )
      .then(res => {
        setMatchUsuario(res.data.matches)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    pegarMatches()
  }, [])
  const mostrarMatches = matchUsuario.map(usuario => {
    return (
      <Lista>
        <Foto src={usuario.photo} key={usuario.id} />
        <Texto>{usuario.name}</Texto>
      </Lista>
    )
  })
  const limparEstado = () => {
    setMatchUsuario([])
  }
  return (
    <Container>
      <CardPerfil>
        <Header trocandoEstado={props.trocandoEstado} />
        {mostrarMatches}
        <Limpar limparEstado={limparEstado} />
      </CardPerfil>
    </Container>
  )
}
