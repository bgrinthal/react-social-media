import * as api from '../api';

//Action creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        //because async dispatch we 'dispatch action' instead of 'return action'
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch(error) {
        console.log(error.message);
    }
}