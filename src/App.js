import React, { useState } from 'react'
import Perfil from './components/Perfil'
import Matches from './pages/Matches/Matches'

function App() {
  const [tela, setTela] = useState(true)

  const trocandoEstado = () => {
    setTela(!tela)
  }

  const trocaTela = () => {
    switch (tela) {
      case true:
        return <Perfil trocandoEstado={trocandoEstado} />
      case false:
        return <Matches trocandoEstado={trocandoEstado} />
      default:
        return 'Página não encontrada'
    }
  }
  return <div>{trocaTela()}</div>
}

export default App
