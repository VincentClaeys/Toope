/**
 * My Element Helpers
 */

const Elements = {

  createButton({
    textContent = '', className, onClick = null, type, id,
  }) {
    const button = document.createElement('button');
    button.textContent = textContent;
    button.input = type;
    button.classList.add(className);

    button.id = id;
    if (onClick) button.addEventListener('click', () => { onClick(); });
    return button;
  },

  createIcon({ classNames = [] }) {
    const icon = document.createElement('i');
    if (classNames.length) icon.classList.add(...classNames);

    return icon;
  },

  createList({ className, id }) {
    const list = document.createElement('ul');
    list.classList.add(className);
    list.id = id;
    return list;
  },
  createLabel({ id, textContent = '' }) {
    const label = document.createElement('label');
    label.id = id;
    label.textContent = textContent;
  },

  createInput({
    type, id, placeholder = '',
  }) {
    const input = document.createElement('input');

    input.type = type;
    input.placeholder = placeholder;
    input.id = id;
    return input;
  },
  createInputField({
    type, id, placeholder = '', className,
  }) {
    const input = document.createElement('input');
    input.classList.add(className);
    input.type = type;
    input.placeholder = placeholder;
    input.id = id;
    return input;
  },

  createHeader({ textContent = ' ', className, id }) {
    const header = document.createElement('h1');
    header.textContent = textContent;
    header.classList.add(className);
    header.id = id;
    return header;
  },
  createText({ textContent = ' ', className, id }) {
    const text = document.createElement('p');
    text.textContent = textContent;
    text.classList.add(className);
    text.id = id;

    return text;
  },

  createImage({
    newSource, className, onClick = null, id,
  }) {
    const picture = document.createElement('img');
    picture.src = newSource;
    picture.classList.add(className);
    picture.id = id;

    if (onClick) picture.addEventListener('click', () => { onClick(); });
    return picture;
  },

  createContainer({
    className = '', id = '', children = [],
  }) {
    const container = document.createElement('div');
    if (id) container.setAttribute('id', id);
    container.className = className;

    if (children.length) {
      children.forEach((child) => {
        if (child instanceof Element) {
          container.appendChild(child);
        }
      });
    }
    return container;
  },

};

export default Elements;
