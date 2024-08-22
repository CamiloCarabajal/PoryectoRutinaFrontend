import axios from 'axios';

const API_ROUTINES = 'https://localhost:7065/swagger';

export const getAllRoutines = async () => {
    const response = await axios.get('https://localhost:7065/swagger/web/rutinas');
    return response.data;
  };
export const getRoutine = async (id) => {
    const response = await axios.get(`https://localhost:7065/swagger/web/rutinas/${id}`);
    return response.data;
  };
  export const createRoutine = async (routine) => {
    const response = await axios.post('https://localhost:7065/swagger/web/rutinas', routine);
    return response.data;
  };
  export const updateRoutine = async (routine) => {
    const response = await axios.put('https://localhost:7065/swagger/web/rutinas', routine);
    return response.data;
  };
  export const deleteRoutine = async (id) => {
    await axios.delete(`https://localhost:7065/swagger/web/rutinas/${id}`);
  };
  

  
  

  