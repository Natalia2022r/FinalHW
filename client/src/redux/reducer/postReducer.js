import { ADD_POST, GET_POST } from "../type";

const initialState = {
  post: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return { ...state, post: [...state.post, action.payload] };
    }
    case GET_POST: {
      return { ...state, post: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const postSelector = (state) => state.postReducer.post;

export default postReducer;
