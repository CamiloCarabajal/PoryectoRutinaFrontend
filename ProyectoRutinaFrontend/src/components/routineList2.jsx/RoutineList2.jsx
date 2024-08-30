import React, { useEffect, useState } from "react";
import axios from "axios";

const RoutineList2 = () => {
  const [routines, setRoutines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const response = await axios.get("https://localhost:7162/api/Routine");
        if (Array.isArray(response.data)) {
          setRoutines(response.data);
        } else {
          throw new Error("La respuesta no es un array");
        }
      } catch (error) {
        console.error("Error fetching routines:", error);
        setError(error.message);
      }
    };

    fetchRoutines();
  }, []);

  const deleteRoutine = async (id) => {
    console.log(id);
    try {
      await axios.delete(`https://localhost:7162/api/Routine?id=${id}`);
      setRoutines(routines.filter((routine) => routine.id !== id));
    } catch (error) {
      console.error("Error deleting routine:", error);
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Rutinas</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Dificultad</th>
            <th>Duración</th>
            <th>Ejercicios</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {routines.length > 0 ? (
            routines.map((routine, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{routine.name}</td>
                <td>{routine.difficulty}</td>
                <td>{routine.duration}</td>
                <td>
                  <ul>
                    {routine.routineExercises.map((exercise, exIndex) => (
                      <li key={exIndex}>
                        Ejercicio {exIndex + 1}: {exercise.name} (
                        {exercise.category}) -{" "}
                        {exercise.useMachine ? "Usa Máquina" : "Sin Máquina"}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteRoutine(routine.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No routines available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RoutineList2;
