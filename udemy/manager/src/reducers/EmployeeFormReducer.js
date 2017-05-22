import { 
  EMPLOYEE_UPDATE
} from '../actions/types';

const initialState = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
