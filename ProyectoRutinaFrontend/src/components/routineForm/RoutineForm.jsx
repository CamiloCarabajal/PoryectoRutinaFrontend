import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const RoutineForm = ({ selectedRoutine, onAdd, onUpdate }) => {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("Baja");
  const [duration, setDuration] = useState(0);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (selectedRoutine) {
      setName(selectedRoutine.name);
      setDifficulty(selectedRoutine.difficulty);
      setDuration(selectedRoutine.duration);
      setExercises(selectedRoutine.exercises || []);
    }
  }, [selectedRoutine]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const routine = { id: Date.now(), name, difficulty, duration, exercises };
    if (selectedRoutine) {
      onUpdate(routine);
    } else {
      onAdd(routine);
    }
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setDifficulty("Baja");
    setDuration(0);
    setExercises([]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre de la Rutina</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Dificultad</Form.Label>
        <Form.Control
          as="select"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Baja</option>
          <option>Media</option>
          <option>Alta</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Duración (minutos)</Form.Label>
        <Form.Control
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {selectedRoutine ? "Actualizar Rutina" : "Crear Rutina"}
      </Button>
    </Form>
  );
};

export default RoutineForm;
