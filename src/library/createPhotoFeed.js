/* eslint-disable no-underscore-dangle */
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function addItemToList(userID, firstName, lastName, fileName, URLPath) {
  const ul = document.getElementById('list');

  const _userID = document.createElement('li');
  const _firstName = document.createElement('li');
  const _lastName = document.createElement('li');
  const _picture = document.createElement('img');
  const _fileName = document.createElement('li');
  const _URLPath = document.createElement('li');
  const bt2n = document.createElement('div');

  _picture.src = URLPath;
  _picture.id = 'picture';
  _userID.innerHTML = `UserID : ${userID}`;
  _firstName.innerHTML = `This photo is uploaded by ${firstName}`;
  _firstName.className = 'listItemsContainer__allContent--uploadedUsername';
  _lastName.innerHTML = `Lastname : ${lastName}`;
  bt2n.className = 'listItemsContainer__allContent';

  // _picture.innerHTML = 'Picture : ' + fileName;

  _fileName.innerHTML = `filename : ${fileName}`;
  _URLPath.innerHTML = `URL Path : ${URLPath}`;
  ul.appendChild(bt2n);
  bt2n.appendChild(_firstName);
  bt2n.appendChild(_picture);
}

class CreatePhoto {
  // eslint-disable-next-line class-methods-use-this

  // eslint-disable-next-line class-methods-use-this
  async fetchAll() {
    const firestore = getFirestore();

    const querySnapshot = await getDocs(collection(firestore, 'users'));

    querySnapshot.forEach((doc) => {
      const { userID } = doc.data();
      const { firstName } = doc.data();
      const { lastName } = doc.data();
      const fileName = doc.data().imageFilename;
      const URLPath = doc.data().profileURL;

      addItemToList(userID, firstName, lastName, fileName, URLPath);
    });
  }
}
export default CreatePhoto;
