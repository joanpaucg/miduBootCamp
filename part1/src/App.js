import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje';
import Description from './Description'
function App() {
  const mensaje= "Hola"
  const a= "JP"
  const b= "CG"
  return (
    <div className="App">
     <Mensaje color="red" message="Trabajando Jefe"/>
     <Mensaje color="blue" message="Quieres unirte a nuestro clan?"/>
     <Mensaje color="green" message="Programamos en React Baby"/>
     <Description color="orange" message="Unete en nuestro club de React Killers!"/>
    </div>
  );
}

export default App;
