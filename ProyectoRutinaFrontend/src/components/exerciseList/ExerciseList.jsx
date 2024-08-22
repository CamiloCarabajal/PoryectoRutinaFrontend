import React, {useState} from 'react'
import { Button } from 'react-bootstrap';

const exercisesPreloaded = [
    { id: 1, name: 'Press de pecho', category: 'Pecho', usesMachine: true },
    { id: 2, name: 'Curl de bíceps', category: 'Brazos', usesMachine: false },
    { id: 3, name: 'Sentadillas', category: 'Piernas', usesMachine: true },
    { id: 4, name: 'Abdominales', category: 'Abdominales', usesMachine: false },
  ];


const ExerciseList = () => {
    const [exercises, setExercises] = useState(exercisesPreloaded);
  return (
    <div className='mt-3'>
        <h3>Ejercicios Disponibles</h3>
        <ul className='list-group'>
            {exercises.map((exercise)=>(
                <li key={exercise.id} className='list-group-item d-flex justify-content-between'>
                    {exercise.name} - Categoria: {exercise.category} - {exercise.usesMachine ? 'Con Maquina' : 'Sin Maquina'}
                    <Button variant='primary'>Agregar a la Rutina</Button>
                </li>
            ))};
        </ul>
    </div>
  );
};

export default ExerciseList