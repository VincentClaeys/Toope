/**
 *dashboard Component
 */

/* eslint-disable class-methods-use-this */

import Component from '../library/Component';
import Elements from '../library/Elements';
import logo from '../images/logo.png';
import Router from '../Router';
import Authenticator from '../library/Authenticator';

class ProfileSettingsComponent extends Component {
  constructor() {
    super({
      name: 'profileSettings',
      routerPath: '/profileSettings',
    });
  }

  render() {
    this.clearComponent();

    const profileSettingsContainer = document.createElement('div');

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
      textContent: 'Profile',
      className: 'dashboardContainer__sloganOne',
    });
    const textContainerTwo = Elements.createText({
      textContent: 'Change your profile here! ',
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

    profileSettingsContainer.appendChild(createContainer);
    return profileSettingsContainer;
  }
}
export default ProfileSettingsComponent;
