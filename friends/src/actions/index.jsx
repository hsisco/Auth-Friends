import { axiosWithAuth } from '../utils/axiosWithAuth';

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const DEL_FRIEND_START = "DEL_FRIEND_START";
export const DEL_FRIEND_DOING = "DEL_FRIEND_DOING";
export const DEL_FRIEND_SUCCESS ="DEL_FRIEND_SUCCESS";

export const fetchData = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth
    .get('/friends')
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const addFriend = (friend) => dispatch => {
  dispatch({type: ADD_FRIEND_START})
  axiosWithAuth
    .post('/friends', friend)
    .then(res => {
      console.log(res)
      dispatch({
        type: ADD_FRIEND_SUCCESS,
        payload: res
      })
    })
    .catch(err => console.log(err))
};

export const deleteFriend = (friend) => dispatch => {
  console.log(friend);
  dispatch({type: DEL_FRIEND_START})
  axiosWithAuth
  .delete(`/friends/${friend.id}`)
  .then(res=> {
    console.log("doing", res)
    dispatch({
      type: DEL_FRIEND_DOING,
      payload: res.data
    })
  })
  .then(res=> {
    console.log(res)
    dispatch({
      type: DEL_FRIEND_SUCCESS,
      payload: res
    })
  })
  .catch(err => console.log(err))
};