/**
 *dashboard Component
 */

/* eslint-disable class-methods-use-this */
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Component from '../library/Component';
import Elements from '../library/Elements';
import logo from '../images/logo.png';
import Router from '../Router';
import Authenticator from '../library/Authenticator';

import CreateCard from '../library/createCard';

class EventsComponent extends Component {
  constructor() {
    super({
      name: 'events',
      routerPath: '/events',
    });
  }

  render() {
    this.clearComponent();

    const EventsContainer = document.createElement('div');

    // content wrapper One
    const header = Elements.createImage({
      newSource: logo,
      className: 'dashboard__logo',
      onClick: () => {
        Router.getRouter().navigate('/dashboard');
      },
    });
    const auth = getAuth();
    function profilePhoto() {
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
    const komop = new CreateCard();

    window.onload = (profilePhoto(), komop.fetchAllData());

    const logOutBtn = Elements.createButton({
      className: 'dashboard__btnLogOut',
      textContent: 'Log out',
      onClick: () => {
        const outLog = new Authenticator();
        outLog.logOut();
      },
    });

    // wrapper One
    const homePageWrapperOne = Elements.createContainer({
      className: 'dashboard',
      children: [header, logOutBtn],
    });

    // content wrapper Two
    const headerContainerTwo = Elements.createHeader({
      textContent: 'Events',
      className: 'eventsContainer__textContainer--sloganOne',
    });
    const textContainerTwo = Elements.createText({
      textContent: 'Create unforgettable moments',
      className: 'eventsContainer__textContainer--text',

    });
    const textContainer = Elements.createContainer({
      className: 'eventsContainer__textContainer',
      children: [headerContainerTwo, textContainerTwo],
    });
    const icon = Elements.createIcon({
      classNames: ['fas', 'fa-plus', 'input-icon'],
      onClick: () => {
        Router.getRouter().navigate('/createEvent');
      },
    });
    const iconContainer = Elements.createContainer({
      className: 'eventsContainer__iconContainer',
      children: [icon],
    });

    // wrapper Two
    const homePageWrapperTwo = Elements.createContainer({
      className: 'eventsContainer',
      children: [textContainer, iconContainer],

    });

    const createdEvents = Elements.createList({
      id: 'list',
      className: 'listItemsContainer',
    });

    // wrapper Two

    // content wrapper three

    // combine two wrappers
    const createContainer = Elements.createContainer({
      className: 'togheter',
      children: [homePageWrapperOne, homePageWrapperTwo,
        createdEvents],
    });

    EventsContainer.appendChild(createContainer);
    return EventsContainer;
  }
}
export default EventsComponent;
