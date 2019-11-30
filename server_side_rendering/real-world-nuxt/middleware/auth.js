import firebase from 'firebase'

export default function({redirect}){
  const currentUser = firebase.auth().currentUser;
  if(!currentUser) redirect('/login');
}

