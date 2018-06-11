import { 
  GET_CURRENT_USER
} from '../actions'; 

const initValue = {
  error: '',
  username: '',
  email: ''
};

export default function(state=initValue, action) {
  switch(action.type) {
  case GET_CURRENT_USER:  
    return {                                                           
      error: '',
      username: action.data.username,
      email: action.data.email
    };
  default:
    return state;
  }
}