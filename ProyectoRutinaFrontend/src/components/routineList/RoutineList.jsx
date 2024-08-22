import React from 'react'
import { Button } from 'react-bootstrap'


const RoutineList = ({routines, onEdit, onDelete}) => {
    console.log(routines, "Hola milo");
    if (!routines || routines.length === 0) {
        return <p>No hay rutinas disponibles.</p>;
      }
  return (
    <div className='mt-3'>
        <h3> Rutinas </h3>
        <ul className='list-group'>
            {routines.map((routine)=> (
                <li key= {routine.id} className='list-group-item d-flex justify-content-between'>
                    <div>
                        <strong>{routine.name}</strong> - Dificultad {routine.difficulty}
                        <p>Duracion: {routine.duration} minutos</p>
                    </div>
                    <div>
                        <Button variant='warning' onClick={()=> onEdit(routine)}>Editar</Button>
                        <Button variant="danger" onClick={() => onDelete(routine.id)}>Eliminar</Button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default RoutineList