import { ADD_TASK,
    DELETE_TASK,
    EDIT_TASK,
    COMPLETE_TASK } 
from '../const/ActionTypes';

const initialState=[{
    task:'learn react redux',
    isDone:false,
    id: Math.random()
}]
const TodoReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case ADD_TASK:
            return [...state,payload];
            
            case DELETE_TASK:
          return state.filter(el=>el.id!==payload)

          case COMPLETE_TASK:
            return state.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el);
           
            case EDIT_TASK:
            return state.map(el=>el.id===payload.id?{...el,task:payload.taskModified}:el)
          
        }
}
 
export default TodoReducer ;