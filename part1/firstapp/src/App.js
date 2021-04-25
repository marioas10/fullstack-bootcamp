import './App.css';
import Description from './Description'

const Mensaje = () => {
  return <h1>Hola mundo</h1>
}

const App = () => {
  const mensaje = 'Hola'
  const a = 2
  const b = 3

  return (
    <div className="App">
      <Mensaje />
      <Description color='red' message='Estamos trabajando en un curso de react' />
      <Description color='green' message='Esta es otra descripción' />
      <h1>Título de la App</h1>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es:</p>
        {mensaje + ' evualuación en JSX'}
        <br/>
        {a + b}
      </div>
    </div>
  )
}

export default App;
