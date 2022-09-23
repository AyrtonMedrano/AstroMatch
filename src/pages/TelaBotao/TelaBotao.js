import React from 'react'
import Limpar from '../../components/Limpar'
import Header from '../../components/Header'
import { Container, CardPerfil, Espacamento } from './Styled'

export default function TelaBotao(props) {
  return (
    <Container>
      <CardPerfil>
        <Header trocandoEstado={props.trocandoEstado} />
        <Espacamento />
        <Limpar pegarPerfil={props.pegarPerfil} />
      </CardPerfil>
    </Container>
  )
}
