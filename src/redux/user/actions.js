import firebase from 'firebase';
import 'firebase/firestore';
import config from '../../static/static__server-config';
const APIHOST = config.apiUrl

export function updateProfile(formData) {
  return dispatch => { 
    fetch(`${APIHOST}update`, {
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
        type: 'updateProfile_ref',
        data
      });
    })
    .catch((error) => {
      throw error
    })
  }
}

export function getProfile(id) {
  return dispatch => { 
    firebase.firestore().collection('sec_users').doc(id).onSnapshot(function(doc) {
      const data = doc.data()
      data.id = doc.id
      return dispatch({
        type: 'getProfile_ref',
        data: {success: true, data}
      });    
    })
  }
}

export function getDesignation() {
  return dispatch => { 
    firebase.firestore().collection('designation').where("is_active", "==", true).onSnapshot(function(snapshot) {
      const data = []
      snapshot.forEach( async function(doc) {
        const designation = doc.data()
        designation.id = doc.id
        data.push(designation)       
      })
      return dispatch({
        type: 'designationRef',
        data: {success: true, data}
      });
    })
  }
}

export function getstatus() {
  return dispatch => { 
    firebase.firestore().collection('work_status').where("is_active", "==", true).onSnapshot(function(snapshot) {
      const data = []
      snapshot.forEach( async function(doc) {
        const status = doc.data()
        status.id = doc.id
        data.push(status)       
      })
      return dispatch({
        type: 'statusRef',
        data: {success: true, data}
      });
    })
  }
}
