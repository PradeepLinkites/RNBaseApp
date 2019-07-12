import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import config from '../../static/static__server-config';
import _ from 'lodash';
const APIHOST = config.apiUrl

export function postReport(formData) {
  return dispatch => { 
    fetch(`${APIHOST}report`, {
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
        type: 'postReport_ref',
        data
      });
    })
    .catch((error) => {
      throw error
    })
  }
}

export function resetReport(){
  return dispatch => { 
    return dispatch({
      type: 'resetRef',
      data: {}
    });
  }
}


export function resetReportData(){
  return dispatch => { 
    return dispatch({
      type: 'resetReportRef',
      data: {}
    });
  }
}

export function getReport(userid) {
  return dispatch => { 
    fetch(`${APIHOST}fetch/report/${userid}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return dispatch({
        type: 'reportRef',
        data
      });
    })
    .catch((error) => {
      throw error
    })
  }
}

export function uploadImage(base64Obj) {
  return dispatch => { 
    fetch(`${APIHOST}uploadImage`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(base64Obj),
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return dispatch({
        type: 'imageRef',
        data
      });
    })
    .catch((error) => {
      throw error
    })
  }
}

export function resetUploadImage(){
  return dispatch => { 
    return dispatch({
      type: 'resetImageRef',
      data: {}
    });
  }
}

