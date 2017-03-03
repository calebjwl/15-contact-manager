import ContactFormView from '../view/contact-form';
import ContactListView from '../view/contact-list';

export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.contactFormView = new ContactFormView(this.el.querySelector('.form'), store);
    this.contactListView = new ContactListView(this.el.querySelector('.grid'), store);
  }

  created() {
    this.store.subscribe(() => {
      const contacts = this.store.getState().contacts;
      window.localStorage.contacts = JSON.stringify(contacts);
    });

    this.contactFormView.mounted();
    this.contactListView.mounted();

    const dataString = window.localStorage.contacts || '[]';

    this.store.dispatch({ type: 'CONTACT@FIND_ALL', data: JSON.parse(dataString) });
  }
}
