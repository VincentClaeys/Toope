/**
 *dashboard Component
 */

/* eslint-disable class-methods-use-this */
import {
  getAuth, onAuthStateChanged, updateProfile,
} from 'firebase/auth';
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
    const profileName = Elements.createText({
      id: 'profileName',
      className: 'changeProfileContainer__profileName',
    });
    const CurrentProfileNameText = Elements.createText({
      id: 'profileName',
      className: 'changeProfileContainer__CurrentProfileNameText',
      textContent: 'Current Username : ',
    });
    const setNewProfileNameText = Elements.createText({
      id: 'profileName',
      className: 'changeProfileContainer__setNewProfileNameText',
      textContent: 'Change username : ',
    });
    const newProfileName = Elements.createInputField({
      id: 'newProfileName',
      className: 'changeProfileContainer__newProfileNameInput',
      placeholder: ' New userName',
    });
    const auth = getAuth();

    function updateUsername() {
      const usernameke = document.getElementById('newProfileName').value;
      updateProfile(auth.currentUser, {
        displayName: usernameke,

      }).then(() => {
        // eslint-disable-next-line no-unused-expressions
        window.location.reload(true);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // eslint-disable-next-line no-alert
        console.log(`Error ${errorCode}${errorMessage}`);
      });
    }
    const newProfileNameBtn = Elements.createButton({
      className: 'changeProfileContainer__newProfileName',
      id: 'newProfileNameBtn',
      textContent: 'Edit UserName',
      onClick: () => {
        updateUsername();
      },
    });
    const profileContainer = Elements.createContainer({
      className: 'changeProfileContainer',
      children: [CurrentProfileNameText, profileName, setNewProfileNameText,
        newProfileName, newProfileNameBtn],
    });

    function profileURL() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { photoURL } = user;
          header.src = photoURL;
          const { displayName } = user;
          profileName.textContent = `${displayName}`;

          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }
    window.onload = profileURL();
    // combine two wrappers
    const createContainer = Elements.createContainer({
      className: 'togheter',
      children: [homePageWrapperOne, homePageWrapperTwo, profileContainer],
    });

    profileSettingsContainer.appendChild(createContainer);
    return profileSettingsContainer;
  }
}
export default ProfileSettingsComponent;
