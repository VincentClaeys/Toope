/**
 *registerPage Component
 */

/* eslint-disable class-methods-use-this */

import Component from '../library/Component';
import Elements from '../library/Elements';
import photoOne from '../images/backgroundImages2.png';
import logo from '../images/logo.png';
import Authenticator from '../library/Authenticator';
import Router from '../Router';

class ReigsterPageComponent extends Component {
  constructor() {
    super({
      name: 'register',
      routerPath: '/register',
    });
  }

  render() {
    this.clearComponent();
    // content wrapper One
    const registerPageContainer = document.createElement('div');
    const header = Elements.createImage({
      newSource: logo,
      className: 'header__logo',
    });

    const firstImage = Elements.createImage({
      newSource: photoOne,
      className: 'header__photo',
    });

    // wrapper One
    const homePageWrapperOne = Elements.createContainer({
      className: 'header',
      children: [header, firstImage],
    });

    // content wrapper Two
    const headerContainerTwo = Elements.createHeader({
      textContent: 'Register',
      className: 'welcomeBackContainer__sloganOne',
      id: 'test',
    });
    const textContainerTwo = Elements.createText({
      textContent: 'Already have an account? ',
      className: 'welcomeBackContainer__text',
    });
    // inputfield one
    const inputFieldOne = Elements.createInputField({
      className: 'welcomeBackContainer__wrapperFields--inputfieldOne',
      type: 'email',
      id: 'emailRegister',
      placeholder: 'E-mail',
    });
    // inputfield Two

    const inputFieldTwo = Elements.createInputField({
      className: 'welcomeBackContainer__wrapperFields--inputfieldTwo',
      type: 'password',
      // text: 'password',
      placeholder: 'password',
      id: 'pwdRegister',
    });

    // Login button
    const loginButton = Elements.createButton({
      className: 'welcomeBackContainer__btnLogin',
      textContent: 'Next step',
      onClick: () => {
        const auth = new Authenticator();
        auth.register();
      },

    });

    // btn Register
    const registerButton = Elements.createButton({
      className: 'welcomeBackContainer__btnRegister',
      textContent: 'Login here',
      onClick: () => {
        Router.getRouter().navigate('/');
      },
    });

    // wrapper inputfields
    const wrapperInputFields = Elements.createContainer({
      className: 'welcomeBackContainer__wrapperFields',
      children: [inputFieldOne, inputFieldTwo],
    });

    // wrapper Two
    const homePageWrapperTwo = Elements.createContainer({
      className: 'welcomeBackContainer',
      children: [headerContainerTwo, wrapperInputFields, loginButton,
        textContainerTwo, registerButton],

    });

    // combine two wrappers
    const createContainer = Elements.createContainer({
      className: 'togheter',
      children: [homePageWrapperOne, homePageWrapperTwo],
    });

    registerPageContainer.appendChild(createContainer);
    return registerPageContainer;
  }
}
export default ReigsterPageComponent;
