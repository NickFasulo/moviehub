import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../lib/Axios/setAuthToken';
import { SIGN_UP, LOGIN } from '../constants/authUserConstant';

export const signupAPI = userInfo => async dispatch => {
  try {
    let success = await axios.get(
      'http://localhost:3001/api/users/sign-up',
      userInfo
    );

    dispatch({
      type: SIGN_UP,
      payload: success.data,
    });

    return Promise.resolve();
  } catch (e) {
    if (e.response && e.response.status === 500) {
      return Promise.reject(e.response.data.message);
    }
    if (e.message) {
      return Promise.reject(e.message);
    }
  }
};

export const loginAPI = userInfo => async dispatch => {
  try {
    let success = await axios.post(
      'http://localhost:3001/api/users/login',
      userInfo
    );
    const { jwtToken } = success.data;

    dispatch(setAuthSuccessUser(jwtToken));

    return Promise.resolve();
  } catch (e) {
    if (e.response && e.response.status === 500) {
      return Promise.reject(e.response.data.message);
    }
    if (e.message) {
      return Promise.reject(e.message);
    }
  }
};

export const setAuthSuccessUser = jwtToken => dispatch => {
  setAuthToken(jwtToken);

  localStorage.setItem('jwtToken', jwtToken);

  let decoded = jwt_decode(jwtToken);

  dispatch({
    type: LOGIN,
    payload: decoded,
  });
};
