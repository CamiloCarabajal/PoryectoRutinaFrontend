import React, { useEffect, useState } from "react";
import axios from "axios";

const RoutineList2 = () => {
  const [routines, setRoutines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchRoutines = async () => {
      try {
        const response = await axios.get("https://localhost:7162/api/Routine");
        console.log(response.data); // Verifica la estructura de los datos
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Routine List</h1>
      <ul>
        {routines.length > 0 ? (
          routines.map((routine) => (
            <li key={routine.id}>
              <h2>{routine.name}</h2>
              <p>
                <strong>Dificultad:</strong> {routine.difficulty}
              </p>
              <p>
                <strong>Duración:</strong> {routine.duration}
              </p>
              <ul>
                {routine.exercises.map((exercise) => (
                  <li key={exercise.id}>
                    <p>
                      <strong>Ejercicio:</strong> {exercise.name}
                    </p>
                    <p>
                      <strong>Categoría:</strong> {exercise.category}
                    </p>
                    <p>
                      <strong>Usa máquina:</strong>{" "}
                      {exercise.useMachine ? "Sí" : "No"}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p>No routines available</p>
        )}
      </ul>
    </div>
  );
};

export default RoutineList2;
