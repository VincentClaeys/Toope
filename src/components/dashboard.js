/**
 *dashboard Component
 */

/* eslint-disable class-methods-use-this */
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Component from '../library/Component';
import Elements from '../library/Elements';
import Router from '../Router';
import Authenticator from '../library/Authenticator';

class DashboardComponent extends Component {
  constructor() {
    super({
      name: 'dashboard',
      routerPath: '/dashboard',
    });
  }

  render() {
    // content wrapper One
    this.clearComponent();

    const dashboardContainer = document.createElement('div');
    const header = Elements.createImage({
      className: 'dashboard__logo',
    });

    const logOutBtn = Elements.createButton({
      className: 'dashboard__btnLogOut',
      textContent: 'Log out',
      onClick: () => {
        const auth = new Authenticator();
        auth.logOut();
      },
    });

    // wrapper One
    const homePageWrapperOne = Elements.createContainer({
      className: 'dashboard',
      children: [header, logOutBtn],
    });

    // content wrapper Two

    const textContainerTwo = Elements.createText({
      textContent: 'Nice to have you back! ',
      className: 'dashboardContainer__text',

    });

    const showTheUsername = Elements.createText({
      id: 'heelkleinetekst',
      className: 'dashboardContainer__sloganOne',

    });

    const auth = getAuth();

    function showUsername() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { displayName } = user;
          showTheUsername.textContent = `Hello ${displayName},`;

          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }
    function vincent() {
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

    window.onload = (showUsername(), vincent());

    // wrapper Two
    const homePageWrapperTwo = Elements.createContainer({
      className: 'dashboardContainer',
      children: [showTheUsername,
        textContainerTwo],

    });

    // content for the containers

    const contentForContainerEvents = Elements.createButton({
      textContent: ' VIEW EVENTS',
      className: 'AllContainers__divOne--text',
      onClick: () => {
        Router.getRouter().navigate('/events');
      },

    });

    const icon = Elements.createIcon({ classNames: ['fas', 'fa-street-view', 'input-icon'] });

    const btnAndIcon = Elements.createContainer({
      className: 'AllContainers__divOne--content',
      children: [icon, contentForContainerEvents],

    });

    // all eventsButtons and Containers
    const containerOne = Elements.createContainer({
      className: 'AllContainers__divOne',
      children: [btnAndIcon],

    });

    const contentForContainerEventsTwo = Elements.createButton({
      textContent: 'MEMORIES',
      className: 'AllContainers__divTwo--text',
      onClick: () => {
        Router.getRouter().navigate('/memories');
      },

    });

    const iconTwo = Elements.createIcon({ classNames: ['fas', 'fa-photo-video', 'input-icon'] });

    const btnAndIconTwo = Elements.createContainer({
      className: 'AllContainers__divTwo--content',
      children: [iconTwo, contentForContainerEventsTwo],

    });
    const containerTwo = Elements.createContainer({
      className: 'AllContainers__divTwo',
      children: [btnAndIconTwo],
    });
    const contentForContainerEventsThree = Elements.createButton({
      textContent: ' SEARCH A PLACE TO PARTY',
      className: 'AllContainers__divThree--text',
      onClick: () => {
        Router.getRouter().navigate('/searchParty');
      },

    });

    const iconThree = Elements.createIcon({ classNames: ['fas', 'fa-search-location', 'input-icon'] });

    const btnAndIconThree = Elements.createContainer({
      className: 'AllContainers__divThree--content',
      children: [iconThree, contentForContainerEventsThree],

    });
    const containerThree = Elements.createContainer({
      className: 'AllContainers__divThree',
      children: [btnAndIconThree],
    });

    const contentForContainerEventsFour = Elements.createButton({
      textContent: 'TAKE CARE',
      className: 'AllContainers__divFour--text',
      onClick: () => {
        Router.getRouter().navigate('/takeCare');
      },

    });

    const iconFour = Elements.createIcon({ classNames: ['fas', 'fa-hands-helping', 'input-icon'] });

    const btnAndIconFour = Elements.createContainer({
      className: 'AllContainers__divFour--content',
      children: [iconFour, contentForContainerEventsFour],

    });

    const containerFour = Elements.createContainer({
      className: 'AllContainers__divFour',
      children: [btnAndIconFour],
    });

    const contentForContainerEventsFive = Elements.createButton({
      textContent: 'CHANGE PROFILE SETTINGS',
      className: 'AllContainers__divFive--text',
      onClick: () => {
        Router.getRouter().navigate('/profileSettings');
      },

    });

    const iconFive = Elements.createIcon({ classNames: ['fas', 'fa-cog', 'input-icon'] });

    const btnAndIconFive = Elements.createContainer({
      className: 'AllContainers__divFive--content',
      children: [iconFive, contentForContainerEventsFive],

    });
    const containerFive = Elements.createContainer({
      className: 'AllContainers__divFive',
      children: [btnAndIconFive],
    });

    const contentForContainerEventsSix = Elements.createButton({
      textContent: ' PANIC BUTTON',
      className: 'panicButton',
      onClick: () => {

      },

    });

    const btnAndIconSix = Elements.createContainer({
      className: 'AllContainers__divSix--content',
      children: [contentForContainerEventsSix],

    });
    const containerSix = Elements.createContainer({
      className: 'AllContainers__divSix',
      children: [btnAndIconSix],
    });

    // content wrapper Three
    const dashboardEvents = Elements.createContainer({
      className: 'AllContainers',
      children: [containerOne, containerTwo, containerThree,
        containerFour, containerFive, containerSix],
    });
    // combine two wrappers
    const createContainer = Elements.createContainer({
      className: 'togheter',
      children: [homePageWrapperOne, homePageWrapperTwo, dashboardEvents],
    });

    dashboardContainer.appendChild(createContainer);
    return dashboardContainer;
  }
}
export default DashboardComponent;
