class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('li');
    this.el.classList.add('grid__item');
    this.el.innerHTML = `
    <div class="contact-card">
      <div class="contact-card__name">
        <h1 class="contact-card__lastname"></h1>
        <h1 class="contact-card__firstname"></h1>
      </div>
      <p class="contact-card__street"></p>
      <p class="contact-card__city"></p>

      <button class="delete">Delete</button>
    </div>`;
  }

  mounted() {
    this.el.addEventListener('submit', () => {
      this.store.dispatch(removeContact(this.contact.id));
    });
  }

  render() {
    this.el.querySelector('.contact-card__lastname').innerText = `${this.data.lastname}, `;
    this.el.querySelector('.contact-card__firstname').innerText = this.data.firstname;
    this.el.querySelector('.contact-card__street').innerText = this.data.street;
    this.el.querySelector('.contact-card__city').innerText = `${this.data.city}`;
    this.el.querySelector('.contact-card__state').innerText = this.data.state;
  }
}

export default class ContactListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.store.subscribe(() => {
      this.render();
    });
  }

  render() {
    this.el.innerHTML = '';
    const contacts = this.store.getState().contacts;

    contacts.forEach((current) => {
      const view = new ItemView(current, this.store);
      view.mounted();
      view.render();

      this.el.appendChild(view.el);
    });
  }
}
