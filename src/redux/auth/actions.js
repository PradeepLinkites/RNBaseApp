import config from '../../static/static__server-config';
const APIHOST = config.apiUrl

export function login(formData) {
  return dispatch => { 
    fetch(`${APIHOST}login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return dispatch({
        type: 'login_ref',
        data
      });
    })
    .catch((error) => {
      throw error
    })
  }
}

export function resetPassword(formData) {
  return dispatch => { 
    fetch(`${APIHOST}reset`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return dispatch({
        type: 'reset_ref',
        data
      });
    })
    .catch((error) => {
      throw error
    })
  }
}
