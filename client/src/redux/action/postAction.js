import { ADD_POST, GET_POST, UPDATE_POST } from "../type";
import axios from "axios";

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const getPost = (post) => {
  return {
    type: GET_POST,
    payload: post,
  };
};

export const updatePost = (post) => {
  return {
    type: UPDATE_POST,
    payload: post,
  };
};

export const savePost = (url, post) => {
  return (dispatch) => {
    axios.post(url, post).then(({ data }) => dispatch(addPost(data)));
  };
};

export const getApiPost = (url) => {
  return (dispatch) => {
    axios.get(url).then(({ data }) => dispatch(getPost(data)));
  };
};

export const updateApiPost = (url, data) => {
  return (dispatch) => {
    axios.put(url, data).then(({ data }) => dispatch(getPost(data)));
  };
};
