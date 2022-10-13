import { fetchAllPosts } from '../../fetch/fetch';
import actions from './actions';

export const fetchPosts = () => async dispatch => {
  dispatch(actions.fetchPostRequest());
  try {
    const posts = await fetchAllPosts();
    dispatch(actions.fetchPostSuccess(posts));
  } catch (error) {
    dispatch(actions.fetchPostError(error));
  }
};
