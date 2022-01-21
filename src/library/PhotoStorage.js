/* eslint-disable no-underscore-dangle */
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// // Initialize Firebase
// class tester {
//   tester() {
//      function addItemToList(userID, firstName, lastName, fileName, URLPath) {
//       .then((userCredential)=> {
// console.log(userCredential);
//       })
//       .then(()=> {

//       })
//       .catch(()=> {

//       });
//       const ul = document.getElementById('list');
//       const header = document.createElement('h2');

//       // eslint-disable-next-line no-underscore-dangle
//       const _userID = document.createElement('li');
//       const _firstName = document.createElement('li');
//       const _lastName = document.createElement('li');
//       // eslint-disable-next-line no-underscore-dangle
//       const _picture = document.createElement('img');
//       // eslint-disable-next-line no-underscore-dangle
//       const _fileName = document.createElement('li');
//       // eslint-disable-next-line no-underscore-dangle
//       const _URLPath = document.createElement('li');
//       _picture.src = URLPath;

//       _userID.innerHTML = `UserID : ${userID}`;
//       _firstName.innerHTML = `Firstname : ${firstName}`;
//       _lastName.innerHTML = `Lastname : ${lastName}`;
//       // _picture.innerHTML = 'Picture : ' + fileName;
//       _fileName.innerHTML = `filename : ${fileName}`;
//       _URLPath.innerHTML = `URL Path : ${URLPath}`;

//       ul.appendChild(header);
//       ul.appendChild(_userID);
//       ul.appendChild(_firstName);
//       ul.appendChild(_lastName);
//       ul.appendChild(_picture);
//       ul.appendChild(_fileName);
//       ul.appendChild(_URLPath);
//     }

//     async function fetchAllData() {
//       const firestore = getFirestore();
//       const querySnapshot = await getDocs(collection(firestore, 'users'));
//       querySnapshot.forEach((doc) => {
//         const { userID } = doc.data();
//         const { firstName } = doc.data();
//         const { lastName } = doc.data();
//         const fileName = doc.data().imageFilename;
//         const URLPath = doc.data().profileURL;
//         addItemToList(userID, firstName, lastName, fileName, URLPath);
//       });
//     }
//     const user = document.getElementById('listUsers');

//     user.addEventListener('click', fetchAllData);
//   }
// }

class Snel {
  // eslint-disable-next-line class-methods-use-this
  tetsjes() {
    console.log('alstuu werk eens');
  }
}

export default Snel;
