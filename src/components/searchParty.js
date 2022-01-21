/**
 *dashboard Component
 */

/* eslint-disable class-methods-use-this */

import Component from '../library/Component';
import Elements from '../library/Elements';
import logo from '../images/logo.png';
import searchPartyOne from '../images/searchPartyOne.jpg';
import Router from '../Router';
import Authenticator from '../library/Authenticator';

class SearchPartyComponent extends Component {
  constructor() {
    super({
      name: 'searchParty',
      routerPath: '/searchParty',
    });
  }

  render() {
    this.clearComponent();

    const searchPartyContainer = document.createElement('div');

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
      textContent: 'Search here',
      className: 'dashboardContainer__sloganOne',
    });
    const textContainerTwo = Elements.createText({
      textContent: 'look here for a nice party! ',
      className: 'dashboardContainer__text',

    });

    // wrapper Two
    const homePageWrapperTwo = Elements.createContainer({
      className: 'dashboardContainer',
      children: [headerContainerTwo,
        textContainerTwo],

    });

    // content wrapper three
    // image container
    const imageSearchPartyOne = Elements.createImage({
      className: '-container__card--containerImage--imageSpOne',
      newSource: searchPartyOne,
    });
    const imageContainer = Elements.createContainer({
      className: 'container__card--containerImage',
      children: [imageSearchPartyOne],
    });
    // textContent of the card
    const headerSearchPartyOne = Elements.createHeader({
      className: 'container__card--cardContent--title',
      textContent: 'Home Party',
    });

    // party from content
    const partyFromIcon = Elements.createIcon({ classNames: ['fas', 'fa-user', 'input-icon'] });

    const partyFromText = Elements.createText({
      className: 'container__card--cardContent--partyFrom--textPartyOne',
      textContent: 'Jitse De Decker',
    });

    const partyFromContainer = Elements.createContainer({
      className: 'container__card--cardContent--partyFrom',
      children: [partyFromIcon, partyFromText],
    });

    // date content
    const dateIcon = Elements.createIcon({ classNames: ['fas', 'fa-calendar-week', 'input-icon'] });

    const dateText = Elements.createText({
      className: 'container__card--cardContent--dateOne--dateText',
      textContent: '10 / 12 / 2022',
    });

    const dateContainer = Elements.createContainer({
      className: 'container__card--cardContent--dateOne',
      children: [dateIcon, dateText],
    });

    // how many people liked the party
    const likedIcon = Elements.createIcon({ classNames: ['fas', 'fa-heart', 'input-icon'] });
    const likedText = Elements.createText({
      className: 'container__card--cardContent--likedParty--likedText',
      textContent: '217',
    });

    // container of the content for the liked people
    const likedContainer = Elements.createContainer({
      className: 'container__card--cardContent--likedParty',
      children: [likedIcon, likedText],
    });

    // header description
    const headerDescriptionSearchPartyOne = Elements.createHeader({
      className: 'container__card--cardContent--headerDescriptionOne',
      textContent: 'Description',
    });
    // description of the party
    const descriptionSearchPartyOne = Elements.createText({
      className: 'container__card--cardContent--descriptionOne',
      textContent: 'Op 10 december 2022 geef ik een homeparty om 20ste verjaardag te vieren. Iedereen is welkom! geïnteresseerd?Stuur gerust een verzoek!',
    });

    // send request
    const requestBtn = Elements.createButton({
      className: 'container__card--cardContent--requestBtn',
      textContent: 'Send Request',
      onClick: () => {
        // eslint-disable-next-line no-alert
        alert('Request send to Jitse De Decker ');
      },
    });
    // wrapper for the textContent of the card
    const cardContent = Elements.createContainer({
      className: 'container__card--cardContent',
      children: [headerSearchPartyOne, partyFromContainer,
        dateContainer, likedContainer, headerDescriptionSearchPartyOne,
        descriptionSearchPartyOne, requestBtn],
    });
    // card container
    const cardContainer = Elements.createContainer({
      className: 'container__card',
      children: [imageContainer, cardContent],
    });

    // wrapper three
    const searchPartyContainerThree = Elements.createContainer({
      className: 'container',
      children: [cardContainer],
    });

    // combine two wrappers
    const createContainer = Elements.createContainer({
      className: 'togheter',
      children: [homePageWrapperOne, homePageWrapperTwo, searchPartyContainerThree],
    });

    searchPartyContainer.appendChild(createContainer);
    return searchPartyContainer;
  }
}
export default SearchPartyComponent;
