import logo from './logo.svg';
import './App.css';
import SaludarComponente from './Components/SaludarComponente';
import TercerComponente from './Components/TercerComponente';
import TablaEmpleados from './Components/TablaEmpleados';
import { MiPrimerEstado } from './Components/MiPrimerEstado';
import MiSegundoEstado from './Components/MiSegundoEstado';

function App() {
  const fichaMedica ={grupoSanguineo:"A+", alergia:"ninguna"}
  //datos para tabla
  const columns = [
    { header: 'Nombre', accessor: 'name' },
    { header: 'Edad', accessor: 'age' },
    { header: 'País', accessor: 'country' },
  ];

  const data = [
    { name: 'Empleado Uno', age: 20, country: 'Guatemala' },
    { name: 'Empleado Dos', age: 30, country: 'El Salvador' },
    { name: 'Empleado Tres', age: 40, country: 'Honduras' },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <SaludarComponente nombre="uno"></SaludarComponente>
       <SaludarComponente nombre="dos"></SaludarComponente>
       <SaludarComponente nombre="tres"></SaludarComponente>

        <h2>Información médica</h2>
        <TercerComponente name="Paciente 2" lastName="Prueba 2" ficha={fichaMedica}></TercerComponente>
      
      </header>
      <section>
        <h1>Tabla de datos</h1>
        <TablaEmpleados data={data} columns={columns} />
      </section>

      <section>
        <h1>Hooks para cambiar estado</h1>
        <MiPrimerEstado></MiPrimerEstado>
        <MiSegundoEstado></MiSegundoEstado>
      </section>

    </div>
  );
}

export default App;
