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
          console.log(photoURL);
          header.src = photoURL;

          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }

    window.onload = profilePhoto();

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
      className: 'dashboardContainer__sloganOne',
    });
    const textContainerTwo = Elements.createText({
      textContent: 'Check your events! ',
      className: 'dashboardContainer__text',

    });

    const createdEvents = Elements.createList({
      id: 'list',
      className: 'listItemsContainer',
    });

    // wrapper Two
    const homePageWrapperTwo = Elements.createContainer({
      className: 'dashboardContainer',
      children: [headerContainerTwo,
        textContainerTwo],

    });

    // content wrapper three
    const createAnEventBtn = Elements.createButton({
      className: 'eventsPageWrapperThree__createEventContainer--createEventBtn',
      textContent: 'Create An Event here',
      onClick: () => {
        Router.getRouter().navigate('/createEvent');
      },

    });
    const ShowEventsBtn = Elements.createButton({
      className: 'eventsPageWrapperThree__createEventContainer--ShowEventsBtn',
      textContent: 'Show all partys',
      onClick: () => {
        const komop = new CreateCard();
        komop.fetchAllData();
      },

    });

    const createAnEvent = Elements.createContainer({
      className: 'eventsPageWrapperThree__createEventContainer',
      children: [createAnEventBtn, ShowEventsBtn],
    });

    // wrapper three
    const eventsPageWrapperThree = Elements.createContainer({
      className: 'eventsPageWrapperThree',
      children: [createAnEvent],
    });

    // combine two wrappers
    const createContainer = Elements.createContainer({
      className: 'togheter',
      children: [homePageWrapperOne, homePageWrapperTwo, eventsPageWrapperThree,
        createdEvents],
    });

    EventsContainer.appendChild(createContainer);
    return EventsContainer;
  }
}
export default EventsComponent;
