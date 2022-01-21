class Component {
  constructor({
    name,
    routerPath,
  }) {
    this.name = name;
    this.routerPath = routerPath;
    this.reRender = null;
    this.componentContainer = document.getElementById('container');
  }

  clearComponent() { this.componentContainer.innerHTML = ''; }
}

export default Component;
