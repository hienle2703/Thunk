import {GET_DATA} from '../actions/actionType';

const initialState = {
  data: null,
  error: null,
};

const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        data: action.data
      };
    }
    default: {
      return state;
    }
  }
};

export default actionReducer;
