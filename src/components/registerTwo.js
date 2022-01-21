/**
 *registerPage Component
 */

/* eslint-disable class-methods-use-this */
import {
  doc,
  setDoc,
  getFirestore,
} from 'firebase/firestore';
import {
  getAuth, updateProfile,

} from 'firebase/auth';
import {
  getStorage, ref as sRef, uploadBytesResumable, getDownloadURL,
} from 'firebase/storage';

import Component from '../library/Component';
import Elements from '../library/Elements';
import photoOne from '../images/backgroundImages2.png';
import logo from '../images/logo.png';
// import Authenticator from '../library/Authenticator';
import Router from '../Router';

class ReigsterPageTwoComponent extends Component {
  constructor() {
    super({
      name: 'registerTwo',
      routerPath: '/registerTwo',
    });
  }

  render() {
    this.clearComponent();
    // content wrapper One
    const registerPageTwoContainer = document.createElement('div');
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

    // inputfield one

    const inputFieldThree = Elements.createInputField({
      className: 'welcomeBackContainer__wrapperFields--inputfieldTwo',
      type: 'text',
      // text: 'password',
      placeholder: 'Last Name',
      id: 'firstNameRegister',
    });
    const inputFieldFour = Elements.createInputField({
      className: 'welcomeBackContainer__wrapperFields--inputfieldTwo',
      type: 'text',
      // text: 'password',
      placeholder: 'First Name',
      id: 'lastNameRegister',
    });
    const inputFieldFive = Elements.createInputField({
      className: 'welcomeBackContainer__wrapperFields--inputfieldTwo',
      type: 'text',
      // text: 'password',
      placeholder: 'username',
      id: 'usernameRegister',
    });

    // Login button

    let downloadURLVar; let
      fileNameVar;
    let files = [];
    const reader = new FileReader();
    const firestore = getFirestore();

    const createInputFile = Elements.createInput({
      className: 'uploadContainer__uploadBtn',
      id: 'imgName',
      type: 'file',
    });

    function getFileName(file) {
      const temp = file.name.split('.');
      return temp;
    }
    createInputFile.onchange = (e) => {
      files = e.target.files;
      console.log(files);
      fileNameVar = getFileName(files[0]);
      console.log(fileNameVar);
      reader.readAsDataURL(files[0]);
      console.log(reader);
      console.log(downloadURLVar);
    };

    function addUserToRegister() {
      const ref = doc(firestore, 'users', 'oke');

      setDoc(ref, {

        profileURL: downloadURLVar,

      })

        .then(() => {

        })
        .catch((error) => {
          alert(`error${error}`);
        });
    }

    async function uploadTheUser() {
      const imageToUpload = files[0];

      const metaData = {

        contentType: imageToUpload.type,

      };

      const storage = getStorage();
      const storageRef = sRef(storage, `images/${fileNameVar}`);
      const uploadTask = uploadBytesResumable(storageRef, imageToUpload, metaData);

      uploadTask.on(
        'state-change',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);

          // progLab.innerHTML = "Upload " + progress + "%";
        },
        (error) => {
          alert(`error: image not uploaded${error}`);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            downloadURLVar = downloadURL;

            const usernameke = document.getElementById('usernameRegister').value;
            console.log(usernameke);
            const auth = getAuth();
            updateProfile(auth.currentUser, {
              displayName: usernameke,
              photoURL: downloadURLVar,
            }).then(() => {

            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // eslint-disable-next-line no-alert
              console.log(`Error ${errorCode}${errorMessage}`);
            });

            addUserToRegister();

            Router.getRouter().navigate('/');
          });
        },

      );
    }

    const loginButton = Elements.createButton({
      className: 'welcomeBackContainer__btnLogin',
      textContent: 'Register!',
      onClick: () => {
        uploadTheUser();
      },

    });

    // btn Register

    // wrapper inputfields
    const wrapperInputFields = Elements.createContainer({
      className: 'welcomeBackContainer__wrapperFields',
      children: [inputFieldFour, inputFieldThree, inputFieldFive, createInputFile],
    });

    // wrapper Two
    const homePageWrapperTwo = Elements.createContainer({
      className: 'welcomeBackContainer',
      children: [headerContainerTwo, wrapperInputFields, loginButton,
      ],

    });

    // combine two wrappers
    const createContainer = Elements.createContainer({
      className: 'togheter',
      children: [homePageWrapperOne, homePageWrapperTwo],
    });

    registerPageTwoContainer.appendChild(createContainer);
    return registerPageTwoContainer;
  }
}
export default ReigsterPageTwoComponent;
