/**
 * The App Wrapper
 */

// class App {
//   constructor(parent) {
//     this.parent = parent;
//     this.components = [];
//   }

//   addComponent(component) {
//     this.parent.appendChild(component.render());
//   }
// }

// export default App;

import initFirebase from './firebase';
import Component from './library/Component';
import Router from './Router';

class App {
  constructor(parent) {
    this.parent = parent;
    this.components = [];
    initFirebase();
  }

  // eslint-disable-next-line class-methods-use-this
  clearContainer(container) {
    while (container.firstchild) {
      container.removeChild(container.lastChild);
    }
  }

  addComponent(component) {
    if (!(component instanceof Component)) return;

    const { name, routerPath } = component;
    this.components.push(component);
    Router.getRouter().on(
      routerPath,
      () => {
        this.showComponent({
          name,
        });
      },
    ).resolve();
  }

  showComponent({ name }) {
    const foundCompent = this.components.find((component) => component.name === name);
    if (!foundCompent) return;
    this.clearContainer(this.parent);

    this.clearContainer(this.parent);
    if (foundCompent.render) {
      this.parent.appendChild(foundCompent.render());
    }
  }
}

export default App;
