import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
  // Obtener tareas guardadas de localStorage
  const tareasGuardadas =
    localStorage.getItem('tareas') ?
      JSON.parse(localStorage.getItem('tareas')) : [];

  // Establecer el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  // Guardar el estado dentro de localStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  // Acceder a localStorage para comprobar si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  // Estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  // Guardar mostrarCompletadas en localStorage
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas} />
      <Formulario tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;
