import { getFirestore, doc, setDoc } from 'firebase/firestore';

class Crud {
  // eslint-disable-next-line class-methods-use-this
  addUser() {
    const firestore = getFirestore();
    const partyName = document.getElementById('userID').value;
    const from = document.getElementById('firstName').value;
    const date = document.getElementById('lastName').value;

    const ref = doc(firestore, 'Events', partyName);

    setDoc(ref, {
      PartyName: partyName,
      From: from,
      Date: date,
      // profileURL: downloadURLVar,
      // imageFilename: namebox.value + ',' + extLab.innerHTML
    })

      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(`error${error}`);
      });
  }
}
export default Crud;
