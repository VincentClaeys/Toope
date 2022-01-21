// // Element Helpers
// import './sass/main.scss';
// import Elements from './library/Elements';

// const appContainer = document.getElementById('container');

// const button = Elements.createButton({
//   textContent: 'klik hier',
// });

// const header = Elements.createHeader({
//   textContent: 'toop tegoare door Gent',
// });

// const loginContainer = Elements.createContainer({
//   children: [button, header],
// });

// appContainer.appendChild(loginContainer);

// Element Helpers
import App from './App';
import HomePageComponent from './components/HomePage';
import DashboardComponent from './components/dashboard';
import ReigsterPageComponent from './components/registerPage';
import EventsComponent from './components/events';
import MemoriesComponent from './components/memories';
import SearchPartyComponent from './components/searchParty';
import TakeCareComponent from './components/takeCare';
import ProfileSettingsComponent from './components/profileSettings';
import CreateEventComponent from './components/createEvents';
import { UploadPhotosComponent } from './components';
import ReigsterPageTwoComponent from './components/registerTwo';

const initApp = () => {
  const appContainer = document.getElementById('container');

  const app = new App(appContainer);
  app.addComponent(new HomePageComponent());
  app.addComponent(new ReigsterPageComponent());
  app.addComponent(new DashboardComponent());
  app.addComponent(new EventsComponent());
  app.addComponent(new MemoriesComponent());
  app.addComponent(new SearchPartyComponent());
  app.addComponent(new TakeCareComponent());
  app.addComponent(new ProfileSettingsComponent());
  app.addComponent(new CreateEventComponent());
  app.addComponent(new UploadPhotosComponent());
  app.addComponent(new ReigsterPageTwoComponent());
};

window.addEventListener('load', initApp);
