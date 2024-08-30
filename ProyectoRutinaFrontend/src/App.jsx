import React, { useState } from "react";
import RoutineList2 from "./components/routineList2.jsx/RoutineList2";
import ExerciseList from "./components/exerciseList/ExerciseList";
import "bootstrap/dist/css/bootstrap.min.css";
import AddRoutine from "./components/addRoutine/AddRoutine";

const App = () => {
  const [showRoutines, setShowRoutines] = useState(false);
  const [showExercises, setShowExercises] = useState(false);
  const [ShowAddRoutine, setShowAddRoutine] = useState(false);

  const toggleRoutines = () => {
    setShowRoutines(!showRoutines);
  };

  const toggleExercises = () => {
    setShowExercises(!showExercises);
  };

  const toggleAddRoutine = () => {
    setShowAddRoutine(!ShowAddRoutine);
  };

  return (
    <div className="container">
      <h1>GYM : Rutinas de Entrenamiento</h1>

      <button className="btn btn-primary my-3" onClick={toggleAddRoutine}>
        {ShowAddRoutine ? "Ocultar Agregar Rutinas" : "Agregar Rutinas"}
      </button>
      {ShowAddRoutine && <AddRoutine />}

      <button className="btn btn-primary my-3" onClick={toggleRoutines}>
        {showRoutines ? "Ocultar Rutinas" : "Mostrar Rutinas"}
      </button>
      {showRoutines && <RoutineList2 />}

      <button className="btn btn-secondary my-3" onClick={toggleExercises}>
        {showExercises ? "Ocultar Ejercicios" : "Mostrar Ejercicios"}
      </button>
      {showExercises && <ExerciseList />}
    </div>
  );
};

export default App;
