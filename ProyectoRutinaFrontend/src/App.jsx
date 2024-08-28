import React, { useState } from "react";
import RoutineForm from "./components/routineForm/RoutineForm";
import RoutineList from "./components/routineList/RoutineList";
import RoutineList2 from "./components/routineList2.jsx/RoutineList2";
import ExerciseList from "./components/exerciseList/ExerciseList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [routines, setRoutines] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  const addRoutine = (routine) => {
    setRoutines([...routines, routine]);
  };
  const updateRoutine = (updateRoutine) => {
    setRoutines(
      routines.map((routine) =>
        routine.id === updateRoutine.id ? updateRoutine.id : routine
      )
    );
  };
  const deleteRoutine = (routineId) => {
    setRoutines(routines.filter((routine) => routine.id !== routineId));
  };
  return (
    <div className="container">
      <h1> GYM : Rutinas de Entrenamiento</h1>
      <RoutineList
        routines={routines}
        onEdit={setSelectedRoutine}
        onDelete={updateRoutine}
      />
      <RoutineList2 />
      <ExerciseList />
    </div>
  );
};

export default App;
