import React, { useEffect, useState } from "react";
import axios from "axios";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get("https://localhost:7162/api/Exercise");
        if (Array.isArray(response.data)) {
          setExercises(response.data);
        } else {
          throw new Error("La respuesta no es un array");
        }
      } catch (error) {
        console.error("Error fetching exercises:", error);
        setError(error.message);
      }
    };

    fetchExercises();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Ejercicios</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Usa Máquina</th>
          </tr>
        </thead>
        <tbody>
          {exercises.length > 0 ? (
            exercises.map((exercise, index) => (
              <tr key={exercise.id}>
                <td>{index + 1}</td>
                <td>{exercise.name}</td>
                <td>{exercise.category}</td>
                <td>{exercise.useMachine ? "Sí" : "No"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No exercises available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseList;
