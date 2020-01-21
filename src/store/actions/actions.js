import TwitterService from '../../services/TwitterService';

export const CLOSE_ALL_MODALS = () => ({
  type: 'CLOSE_ALL_MODALS',
});

export const OPEN_MODAL = (type) => ({
  type: 'OPEN_MODAL',
  payload: type,
});

const SIGNUP_FAIL = (error) => ({
  type: 'SIGNUP_FAIL',
  payload: error,
});

const SIGNUP_REQUEST = () => ({
  type: 'SIGNUP__REQUEST',
});

const SIGNUP__SUCCESS = (info) => ({
  type: 'SIGNUP_SUCCESS',
  payload: info,
});


export const createUser = (info) => async (dispatch) => {
  dispatch(SIGNUP_REQUEST);
  const twitterService = new TwitterService();
  const res = await twitterService.createUser(info);
  if (res.message) {
    dispatch(SIGNUP_FAIL(res.message));
  } else {
    dispatch(SIGNUP__SUCCESS(info));
    setTimeout(() => {
      dispatch(CLOSE_ALL_MODALS());
    }, 3000);
  }
};
