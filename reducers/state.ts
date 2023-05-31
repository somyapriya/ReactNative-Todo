import {UPDATE_TASK, ADD_TASK,DELETE_TASK,SET_ERROR} from '../constants/constants';

const initialState = {
  count: 0,
  todoList: [],
  isAlreadyAvailable:false
};
const todoReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
  
    case ADD_TASK:
      if (state?.todoList?.length) {
        let list = state?.todoList.filter(
          (item: any) => item.title === action.payload.task,
        );
        if (list?.length) {
            
          return {
            ...state,
            isAlreadyAvailable: true
          };
        } else {
          let object = [{title: action.payload.task, status: 'todo',description: action.payload.description}];

          return {
            ...state,
            todoList: [...state.todoList, ...object],
            isAlreadyAvailable: false
          };
        }
      } else {

        let object = [{title: action.payload.task, status: 'todo',description: action.payload.description}];
        return {
          ...state,
          todoList: [...state.todoList, ...object],
          isAlreadyAvailable: false
        };
      }
      case UPDATE_TASK:
        return {
          ...state,
          todoList: action.payload,
        };
        case DELETE_TASK:
          let list = state?.todoList.filter(
            (data: any) => data.title !== action.payload.title,
          );
          return {
            ...state,
            todoList:list
          };
          case SET_ERROR:
            return {
              ...state,
              isAlreadyAvailable:  action.payload,
            };

          
    default:
      return state;
  }
};

export default todoReducer;
