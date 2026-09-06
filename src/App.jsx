import { v4 as uuidv4 } from 'uuid';
//biblioteca para gerar id's aleatórios
function App() {

  const list = [{ id: uuidv4(), task: "Ir à academia" }, { id: uuidv4(), task: "Estudar React" }, { id: uuidv4(), task: "Fazer exercícios" }]

  function inputMudou(event) {
    console.log(event.target.value)
    list.push({ id: uuidv4(), task: event.target.value })
    console.log(list)
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
