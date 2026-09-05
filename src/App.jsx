function App() {

  function inputMudou(event) {
    console.log(event.target.value)
  }

  function cliqueiNoBotao() {
    console.log('cliquei no botão')
  }

  return (
    <>
      <input onChange={inputMudou} type="text" placeholder="O que tenho para fazer?" />
      <button onClick={cliqueiNoBotao}>Adicionar</button>

      <ul>
        <li>Ir à academia</li>
        <li>Estudar React</li>
        <li>Fazer exercícios</li>
      </ul>
    </>
  )
}

export default App
