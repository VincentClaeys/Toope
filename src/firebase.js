/**
 *  Firebase initializer
 */
import 'regenerator-runtime/runtime';

import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA7ept9dMYY1m3IEt7wpjaUPn72sTJGG3Q',
  authDomain: 'spa-samenuit-samenthuis.firebaseapp.com',
  projectId: 'spa-samenuit-samenthuis',
  storageBucket: 'spa-samenuit-samenthuis.appspot.com',
  messagingSenderId: '731709963843',
  appId: '1:731709963843:web:3fe1da7497f09dd604def6',
};

// Initialize Firebase
const initFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initFirebase;
