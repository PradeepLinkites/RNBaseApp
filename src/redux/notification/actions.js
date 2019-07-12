import firebase from 'firebase';
import 'firebase/firestore';
import config from '../../static/static__server-config';
const APIHOST = config.apiUrl

export function getNotification(id) {
  return dispatch => { 
    firebase.firestore().collection('notifications').where("userId", "==", id).onSnapshot(function(snapshot) {
      const data = []
      snapshot.forEach( async function(doc) {
        const notification = doc.data()
        notification.id = doc.id
        data.push(notification)       
      })
      return dispatch({
        type: 'notificationRef',
        data: {success: true, data}
      });
    })
  }
}

export function markNotification(id) {
  return dispatch => { 
    firebase.firestore().collection("notifications").doc(id).update({"isRead": true})
  }
}