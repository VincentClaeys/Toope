/**
 *dashboard Component
 */

/* eslint-disable class-methods-use-this */

import Component from '../library/Component';
import Elements from '../library/Elements';
import logo from '../images/logo.png';
import Router from '../Router';
import Authenticator from '../library/Authenticator';
import Crud from '../library/Crud';

class CreateEventComponent extends Component {
  constructor() {
    super({
      name: 'createEvent',
      routerPath: '/createEvent',
    });
  }

  render() {
    this.clearComponent();

    const CreateEventContainer = document.createElement('div');

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
      textContent: 'Create Event',
      className: 'dashboardContainer__sloganOne',
    });
    const textContainerTwo = Elements.createText({
      textContent: 'and have a party to remember',
      className: 'dashboardContainer__text',

    });
    // inputifelds
    const inputUserId = Elements.createInput({
      className: ' uploadContainer__inputFieldUpload',
      type: 'text',
      id: 'userID',
      placeholder: 'Event Name',
    });
    const firstnameInput = Elements.createInput({
      className: ' uploadContainer__inputFieldUpload',
      type: 'text',
      id: 'firstName',
      placeholder: 'Your name',
    });
    const lastNameInput = Elements.createInput({
      className: ' uploadContainer__inputFieldUpload',
      type: 'text',
      id: 'lastName',
      placeholder: 'Date',
    });

    const createEventBtn = Elements.createButton({
      className: 'uploadContainer__uploadBtn',
      textContent: 'Create Event',
      id: 'createEvent',
      onClick: () => {
        const auth = new Crud();
        auth.addUser();
        // eslint-disable-next-line no-alert
        alert('Your event is created! ');
        Router.getRouter().navigate('/events');
      },
    });

    const uploadPhotoContainer = Elements.createContainer({
      className: 'uploadContainer',
      children: [inputUserId, firstnameInput, lastNameInput, createEventBtn],
    });

    // wrapper Two
    const homePageWrapperTwo = Elements.createContainer({
      className: 'dashboardContainer',
      children: [headerContainerTwo,
        textContainerTwo, uploadPhotoContainer],

    });

    // combine two wrappers
    const createContainer = Elements.createContainer({
      className: 'togheter',
      children: [homePageWrapperOne, homePageWrapperTwo],
    });

    CreateEventContainer.appendChild(createContainer);
    return CreateEventContainer;
  }
}
export default CreateEventComponent;
