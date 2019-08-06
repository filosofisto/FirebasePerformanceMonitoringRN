import * as firebase from 'firebase/app';
import 'firebase/performance';

const firebaseConfig = {
    apiKey: 'AIzaSyCQDpse3IH2_ZfE5UqPpS227Zo5REKsssM',
    authDomain: 'fir-poc-fc516.firebaseapp.com',
    databaseURL: 'https://fir-poc-fc516.firebaseio.com',
    projectId: 'fir-poc-fc516',
    storageBucket: 'fir-poc-fc516.appspot.com',
    messagingSenderId: '943218161907',
    appId: '1:943218161907:web:49f8c959d8c3f84f'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const performanceEntryApp = firebase.performance();
export let performance = performanceEntryApp;

