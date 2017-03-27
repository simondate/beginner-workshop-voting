import {
  API_URL,
  POLL_ID,
  SET_POLL
} from '../constants/poll';

// TODO: Add action creator for `SET_POLL` action type
const setPoll = (payload) => ({type: SET_POLL, payload});

const req = (url, body, method = 'GET') => new Request(url, {
  method,
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8',
  }),
  body,
});

export const getPoll = () => dispatch => {
  fetch(`${API_URL}/poll?pollId=${POLL_ID}`)
    .then(res => res.json())
    .then(poll => dispatch(setPoll(poll)));
};

// TODO: Add thunk creator for `addVote`

export const addVote = answerId => dispatch => {
  fetch(req(`${API_URL}/poll/vote`, JSON.stringify({
    pollId: POLL_ID,
    answerId
  }), 'POST'))
    .then(res => res.json())
    .then(poll => dispatch(setPoll(poll)));
};
