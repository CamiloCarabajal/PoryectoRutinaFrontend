import React, { useState } from "react";
import axios from "axios";

const AddRoutine = () => {
  const [routine, setRoutine] = useState({
    name: "",
    difficulty: "",
    duration: "",
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoutine({
      ...routine,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7162/api/Routine",
        routine
      );
      console.log("Routine added:", response.data);
      // Limpiar el formulario después de agregar la rutina
      setRoutine({
        name: "",
        difficulty: "",
        duration: "",
      });
    } catch (error) {
      console.error("Error adding routine:", error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Add New Routine</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de la Rutina:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={routine.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Dificultad:</label>
          <input
            type="text"
            className="form-control"
            name="difficulty"
            value={routine.difficulty}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Duración:</label>
          <input
            type="text"
            className="form-control"
            name="duration"
            value={routine.duration}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Rutina
        </button>
      </form>
    </div>
  );
};

export default AddRoutine;
