import {UPDATE_TASK,ADD_TASK,DELETE_TASK,SET_ERROR} from '../constants/constants';



export const addTask = (task: string,description:string )=> {
    return {
      type: ADD_TASK,
      payload: {task,description},
    };
  };


  export const updateTask = (task:any) => {
    return {
      type: UPDATE_TASK,
      payload: task,
    };
  };
  

  export const deleteTask = (task: any) => {
    return {
      type: DELETE_TASK,
      payload: task,
    };
  };


  export const isAvailableError = (val: any) => {
    return {
      type: SET_ERROR,
      payload: val,
    };
  };

  
  