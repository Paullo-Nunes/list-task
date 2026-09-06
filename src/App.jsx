function App() {

  const list = ["Ir à academia", "Estudar React", "Fazer exercícios"]

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
        {list.map((item) => <li>{item}</li>)}
      </ul>
    </>
  )
}

export default App
