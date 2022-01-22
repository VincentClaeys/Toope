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

class TakeCareComponent extends Component {
  constructor() {
    super({
      name: 'takeCare',
      routerPath: '/takeCare',
    });
  }

  render() {
    this.clearComponent();

    const TakeCareContainer = document.createElement('div');

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
    window.onload = profileURL();

    const logOutBtn = Elements.createButton({
      className: 'dashboard__btnLogOut',
      textContent: 'Log out',
      onClick: () => {
        const logOut = new Authenticator();
        logOut.logOut();
      },
    });

    // wrapper One
    const homePageWrapperOne = Elements.createContainer({
      className: 'dashboard',
      children: [header, logOutBtn],
    });

    // content wrapper Two
    const headerContainerTwo = Elements.createHeader({
      textContent: 'Take Care',
      className: 'dashboardContainer__sloganOne',
    });
    const textContainerTwo = Elements.createText({
      textContent: 'report unwanted situations',
      className: 'dashboardContainer__text',

    });

    // wrapper Two
    const homePageWrapperTwo = Elements.createContainer({
      className: 'dashboardContainer',
      children: [headerContainerTwo,
        textContainerTwo],

    });

    // combine two wrappers
    const createContainer = Elements.createContainer({
      className: 'togheter',
      children: [homePageWrapperOne, homePageWrapperTwo],
    });

    TakeCareContainer.appendChild(createContainer);
    return TakeCareContainer;
  }
}
export default TakeCareComponent;
