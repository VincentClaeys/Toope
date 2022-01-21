/* eslint-disable no-console */
/* eslint-disable no-alert */
/**
 *dashboard Component
 */

/* eslint-disable class-methods-use-this */

import {
  doc,
  setDoc,
  getFirestore,
} from 'firebase/firestore';
import {
  getStorage, ref as sRef, uploadBytesResumable, getDownloadURL,
} from 'firebase/storage';
import Component from '../library/Component';
import Elements from '../library/Elements';
import logo from '../images/logo.png';
import Router from '../Router';
import Authenticator from '../library/Authenticator';

class UploadPhotosComponent extends Component {
  constructor() {
    super({
      name: 'uploadPhotos',
      routerPath: '/uploadPhotos',
    });
  }

  render() {
    this.clearComponent();

    const uploadPhotosContainer = document.createElement('div');

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
      textContent: 'Upload Photo',
      className: 'dashboardContainer__sloganOne',
    });
    const textContainerTwo = Elements.createText({
      textContent: 'and share beautiful moments!',
      className: 'dashboardContainer__text',

    });

    /**
       * UPLOAD IMAGE
       */
    let downloadURLVar; let
      fileNameVar;
    let files = [];
    const reader = new FileReader();
    const firestore = getFirestore();
    const createtext = Elements.createInput({
      className: ' uploadContainer__inputFieldUpload',
      placeholder: 'your Username',
      id: 'username',
      type: 'text',
    });
    const createInputFile = Elements.createInput({
      className: 'uploadContainer__uploadBtn',
      id: 'imgName',
      type: 'file',
    });
    const createUploadBtn = Elements.createButton({
      className: 'uploadContainer__uploadBtn',
      id: 'upBtn',
      textContent: 'upload',
    });
    const uploadPhotoContainer = Elements.createContainer({
      className: 'uploadContainer',
      children: [createtext, createInputFile, createUploadBtn],
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
    };
    function addUser() {
      const firstNameVar = document.getElementById('username').value;
      const ref = doc(firestore, 'users', firstNameVar);

      setDoc(ref, {
        firstName: firstNameVar,
        profileURL: downloadURLVar,

      })

        .then(() => {

        })
        .catch((error) => {
          alert(`error${error}`);
        });
    }

    async function uploadProcess() {
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
            addUser();
            Router.getRouter().navigate('/memories');
          });
        },

      );
    }

    createUploadBtn.onclick = uploadProcess;

    /**
 * WRAPPER TWO
 */
    const homePageWrapperTwo = Elements.createContainer({
      className: 'dashboardContainer',
      children: [headerContainerTwo,
        textContainerTwo],

    });

    // combine two wrappers
    const createContainer = Elements.createContainer({
      className: 'togheter',
      children: [homePageWrapperOne, homePageWrapperTwo, uploadPhotoContainer],
    });

    uploadPhotosContainer.appendChild(createContainer);
    return uploadPhotosContainer;
  }
}
export default UploadPhotosComponent;
