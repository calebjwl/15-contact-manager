export default function reducer(state, action) {
  switch (action.type) {
    case 'CONTACT@CREATE':
      return { contacts: [action.data, ...state.contacts] };
    case 'CONTACT@FIND_ALL':
      return { contacts: action.data };
    default:
      return state || { contacts: [] };
  }
}
