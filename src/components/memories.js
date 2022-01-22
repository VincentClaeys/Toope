/**
 *dashboard Component
 */

/* eslint-disable class-methods-use-this */
import {
  getAuth, onAuthStateChanged,
} from 'firebase/auth';
import Component from '../library/Component';
import Elements from '../library/Elements';

import Router from '../Router';
import Authenticator from '../library/Authenticator';
import CreatePhoto from '../library/createPhotoFeed';

class MemoriesComponent extends Component {
  constructor() {
    super({
      name: 'memories',
      routerPath: '/memories',
    });
  }

  render() {
    this.clearComponent();

    const MemoriesContainer = document.createElement('div');

    // content wrapper One
    const header = Elements.createImage({

      className: 'dashboard__logo',
      onClick: () => {
        Router.getRouter().navigate('/dashboard');
      },
    });
    const auth = getAuth();
    function profileURL() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { photoURL } = user;
          header.src = photoURL;

          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }
    const komop = new CreatePhoto();

    window.onload = (komop.fetchAll(), profileURL());
    const logOutBtn = Elements.createButton({
      className: 'dashboard__btnLogOut',
      textContent: 'Log out',
      onClick: () => {
        const logout = new Authenticator();
        logout.logOut();
      },
    });

    // wrapper One
    const homePageWrapperOne = Elements.createContainer({
      className: 'dashboard',
      children: [header, logOutBtn],
    });

    // content wrapper Two
    const headerContainerTwo = Elements.createHeader({
      textContent: 'Photos',
      className: 'memoriesContainer__textContainer--sloganOne',
    });
    const textContainerTwo = Elements.createText({
      textContent: 'Show beautiful moments! ',
      className: 'memoriesContainer__textContainer--text',

    });
    const textContainer = Elements.createContainer({
      className: 'memoriesContainer__textContainer',
      children: [headerContainerTwo, textContainerTwo],
    });
    const icon = Elements.createIcon({
      classNames: ['fas', 'fa-plus', 'input-icon'],
      onClick: () => {
        Router.getRouter().navigate('/uploadPhotos');
      },
    });
    const iconContainer = Elements.createContainer({
      className: 'memoriesContainer__iconContainer',
      children: [icon],
    });

    // wrapper Two
    const homePageWrapperTwo = Elements.createContainer({
      className: 'memoriesContainer',
      children: [textContainer, iconContainer],

    });

    const createdEvents = Elements.createList({
      id: 'list',
      className: 'listItemsContainer',
    });

    // wrapper three

    // combine two wrappers
    const createContainer = Elements.createContainer({
      className: 'togheter',
      children: [homePageWrapperOne, homePageWrapperTwo,
        createdEvents,
      ],
    });

    MemoriesContainer.appendChild(createContainer);
    return MemoriesContainer;
  }
}
export default MemoriesComponent;
