/* eslint-disable class-methods-use-this */
import {
  createUserWithEmailAndPassword,
  getAuth, signInWithEmailAndPassword, signOut,
  signInWithPopup, GoogleAuthProvider, updateProfile,

}
  from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import Router from '../Router';

class Authenticator {
  /**
   * Register With Firebase
   */
  register() {
    const auth = getAuth();
    const firestore = getFirestore();

    const email = document.getElementById('emailRegister').value;
    const pwd = document.getElementById('pwdRegister').value;
    const ref = doc(firestore, 'AllUsers', email);
    setDoc(ref, {
      Email: email,
      passWord: pwd,

      // profileURL: downloadURLVar,
      // imageFilename: namebox.value + ',' + extLab.innerHTML
    });

    createUserWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        // signed in
        const users = userCredential;
        // eslint-disable-next-line no-console
        console.log(users);
      })
      .then(() => {
        Router.getRouter().navigate('/registerTwo');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // eslint-disable-next-line no-alert
        alert(`Error ${errorCode}${errorMessage}`);
      });
  }

  /**
 * Login with Email and Password
 */
  login() {
    const auth = getAuth();

    const email = document.getElementById('email').value;
    const pwd = document.getElementById('pwd').value;

    signInWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        // eslint-disable-next-line no-console
        console.log(userCredential);
        // signed in
        // eslint-disable-next-line no-alert
      })
      .then(() => {
        Router.getRouter().navigate('/dashboard');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // eslint-disable-next-line no-alert
        console.log(`Error ${errorCode}${errorMessage}`);
      });
  }

  ineenfunctie() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      const { displayName } = user;
      const { email } = user;
      const { photoURL } = user;
      const { emailVerified } = user;
      console.log(displayName, email, photoURL, emailVerified);
    } else {
      console.log('no current user');
    }
  }

  updateUsername() {
    const usernameke = document.getElementById('usernameRegister').value;
    console.log(usernameke);
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: usernameke,
    }).then(() => {

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // eslint-disable-next-line no-alert
      console.log(`Error ${errorCode}${errorMessage}`);
    });
  }

  /**
   * Login with Google
   */

  loginWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    // signInWithRedirect(auth, provider);
    signInWithPopup(auth, provider)

      .then(() => {
        Router.getRouter().navigate('/dashboard');
      });
  }

  /**
   * Log out
   */

  logOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      // eslint-disable-next-line no-alert
      Router.getRouter().navigate('/');
    })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // eslint-disable-next-line no-alert
        alert(`Error ${errorCode}${errorMessage}`);
      });
  }
}

// const auth = new Authenticator();
// auth.register();

export default Authenticator;
