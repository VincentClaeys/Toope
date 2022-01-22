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
import {
  getAuth, onAuthStateChanged,
} from 'firebase/auth';
import Component from '../library/Component';
import Elements from '../library/Elements';
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
    const auth = getAuth();

    const uploadPhotosContainer = document.createElement('div');

    // content wrapper One
    const header = Elements.createImage({

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
    const uploadPhotoText = Elements.createText({
      id: 'profileNameText',
      className: 'uploadPhotoContainer__uploadText',
      textContent: 'You are going to upload a photo under the name:',
    });
    const profileName = Elements.createText({
      id: 'profileName',
      className: 'uploadPhotoContainer__profileName',
    });
    const uploadPhotoTextTwo = Elements.createText({
      id: 'profileName',
      className: 'uploadPhotoContainer__uploadText',
      textContent: 'Choose a file you want to upload :',
    });
    const createInputFile = Elements.createInput({
      className: 'uploadPhotoContainer__typeFile',
      id: 'imgName',
      type: 'file',
    });
    const createUploadBtn = Elements.createButton({
      className: 'uploadPhotoContainer__uploadBtn',
      id: 'upBtn',
      textContent: 'upload',
    });
    const uploadPhotoContainer = Elements.createContainer({
      className: 'uploadPhotoContainer',
      children: [uploadPhotoText, profileName, uploadPhotoTextTwo,
        createInputFile, createUploadBtn],
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
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { photoURL } = user;
          header.src = photoURL;
          const { displayName } = user;
          profileName.textContent = `${displayName}`;

          const ref = doc(firestore, 'users', displayName);

          setDoc(ref, {
            firstName: displayName,
            profileURL: downloadURLVar,

          })

            .then(() => {

            })
            .catch((error) => {
              alert(`error${error}`);
            });

          // ...
        } else {
          // User is signed out
          // ...
        }
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
