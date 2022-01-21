/**
 *dashboard Component
 */

/* eslint-disable class-methods-use-this */

import Component from '../library/Component';
import Elements from '../library/Elements';
import logo from '../images/logo.png';
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
      newSource: logo,
      className: 'dashboard__logo',
      onClick: () => {
        Router.getRouter().navigate('/dashboard');
      },
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
    const headerContainerTwo = Elements.createHeader({
      textContent: 'Memories',
      className: 'dashboardContainer__sloganOne',
    });
    const textContainerTwo = Elements.createText({
      textContent: 'Show beautiful moments with friends! ',
      className: 'dashboardContainer__text',

    });

    // wrapper Two
    const homePageWrapperTwo = Elements.createContainer({
      className: 'dashboardContainer',
      children: [headerContainerTwo,
        textContainerTwo],

    });

    const createAnEventBtn = Elements.createButton({
      className: 'eventsPageWrapperThree__createEventContainer--createEventBtn',
      textContent: 'Upload your photo',
      onClick: () => {
        Router.getRouter().navigate('/uploadPhotos');
      },

    });
    const showPhotos = Elements.createButton({
      className: 'eventsPageWrapperThree__createEventContainer--createEventBtn',
      textContent: 'Show all photos',
      onClick: () => {
        const komop = new CreatePhoto();
        komop.fetchAll();
      },

    });

    const createdEvents = Elements.createList({
      id: 'list',
      className: 'listItemsContainer',
    });

    const createAnEvent = Elements.createContainer({
      className: 'eventsPageWrapperThree__createEventContainer',
      children: [createAnEventBtn, showPhotos],
    });

    // wrapper three
    const eventsPageWrapperThree = Elements.createContainer({
      className: 'eventsPageWrapperThree',
      children: [createAnEvent],
    });

    // combine two wrappers
    const createContainer = Elements.createContainer({
      className: 'togheter',
      children: [homePageWrapperOne, homePageWrapperTwo,
        eventsPageWrapperThree, createdEvents,
      ],
    });

    MemoriesContainer.appendChild(createContainer);
    return MemoriesContainer;
  }
}
export default MemoriesComponent;
