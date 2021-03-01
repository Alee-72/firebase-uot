import firebase from 'firebase';

const firebaseConfig = {
  // apiKey: 'AIzaSyD913zoD5TQwGsd1kHWPdvzo6-7DMFBj8U',
  // authDomain: 'tododaily-5dc59.firebaseapp.com',
  // databaseURL: 'https://tododaily-5dc59.firebaseio.com',
  // projectId: 'tododaily-5dc59',
  // storageBucket: 'tododaily-5dc59.appspot.com',
  // messagingSenderId: '272694852596',
  // appId: '1:272694852596:web:5ddb762dd9e30e4cb0d7a1',
  // measurementId: 'G-BSXVN1XVL7',


  projectId: 'frb-upl-dwnld-9b5d0',
  appId: '1:179827629046:web:1d463a4eb79bc8983505d7',
  databaseURL: 'https://frb-upl-dwnld-9b5d0-default-rtdb.firebaseio.com',
  storageBucket: 'frb-upl-dwnld-9b5d0.appspot.com',
  locationId: 'us-central',
  apiKey: 'AIzaSyDoHodG2NNPFGzJP6cxe6arcL6lZtqaOPo',
  authDomain: 'frb-upl-dwnld-9b5d0.firebaseapp.com',
  messagingSenderId: '179827629046'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
