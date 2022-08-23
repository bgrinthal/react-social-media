import * as api from '../api';

//Action creators
const getPosts = () => async (dispatch) => {
    //1:01:47
    try {

    } catch(error) {

    }

    const action = {type: 'FETCH_ALL', payload: [] }
    
    //because async dispatch we 'dispatch action' instead of 'return action'
    dispatch(action);
}