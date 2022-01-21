/* eslint-disable no-underscore-dangle */
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function vincentnt(PartyName, From, Date) {
  const ul = document.getElementById('list');

  const _userID = document.createElement('li');
  const _fullName = document.createElement('li');
  const _theDate = document.createElement('li');
  const btn = document.createElement('button');
  const bt2n = document.createElement('div');

  _userID.innerHTML = ` ${PartyName}`;
  _userID.className = 'listItemsContainer__content--partyName';
  _fullName.innerHTML = `Party From : ${From}`;
  _fullName.className = 'listItemsContainer__content--partyFrom';
  _theDate.innerHTML = `Date : ${Date}`;
  _theDate.className = 'listItemsContainer__content--date';
  btn.textContent = 'Details';
  btn.className = 'listItemsContainer__content--btnDetail';
  bt2n.className = 'listItemsContainer__content';

  ul.appendChild(bt2n);
  bt2n.appendChild(_userID);
  bt2n.appendChild(_fullName);
  bt2n.appendChild(_theDate);
  bt2n.appendChild(btn);
}

class CreateCard {
  // eslint-disable-next-line class-methods-use-this

  // eslint-disable-next-line class-methods-use-this
  async fetchAllData() {
    const firestore = getFirestore();
    const querySnapshot = await getDocs(collection(firestore, 'Events'));
    querySnapshot.forEach((doc) => {
      const { PartyName } = doc.data();
      const { From } = doc.data();
      const { Date } = doc.data();
      vincentnt(PartyName, From, Date);
    });
  }
}
export default CreateCard;
