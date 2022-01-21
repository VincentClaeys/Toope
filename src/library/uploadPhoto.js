import { getFirestore, doc, setDoc } from 'firebase/firestore';

class UploadPhotosInFirebase {
  // eslint-disable-next-line class-methods-use-this
  addTheUserAndPhoto() {
    const firestore = getFirestore();
    const userIDVar = document.getElementById('userID').value;

    const firstNameVar = document.getElementById('firstName').value;

    const lastNameVar = document.getElementById('lastName').value;
    const ref = doc(firestore, 'Events', userIDVar);

    setDoc(ref, {

      userID: userIDVar,
      firstName: firstNameVar,
      lastName: lastNameVar,
      // profileURL: downloadURLVar,

    })

      .then(() => {
        alert('record added');
      })

      .catch((error) => {
        alert(`error${error}`);
      });
  }
}

export default UploadPhotosInFirebase;

function addTheUserAndPhoto() {
  const firestore = getFirestore();
  const userIDVar = document.getElementById('userID').value;

  const firstNameVar = document.getElementById('firstName').value;

  const lastNameVar = document.getElementById('lastName').value;
  const ref = doc(firestore, 'Events', userIDVar);

  setDoc(ref, {

    userID: userIDVar,
    firstName: firstNameVar,
    lastName: lastNameVar,
    // profileURL: downloadURLVar,

  })

    .then(() => {
      alert('record added');
    })

    .catch((error) => {
      alert(`error${error}`);
    });
}

const btnlkli = document.addEventListener('upBtn');
btnlkli.addEventListener('click', addTheUserAndPhoto);
