import { v4 as uuidv4 } from 'uuid';

function App() {

  const list = [{ id: uuidv4(), task: "Ir à academia" }, { id: uuidv4(), task: "Estudar React" }, { id: uuidv4(), task: "Fazer exercícios" }]

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
        {list.map((item) => <li key={item.id}>{item.task}</li>)}
      </ul>
    </>
  )
}
  
export default App
