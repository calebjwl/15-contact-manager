export default function reducer (state, action) {
  switch(action.type) {
    case 'CONTACT@CREATE':
      return { contacts: [action.data, ...state.contacts] };
    case 'CONTACT@FINDALL':
      return { contacts: [action.data, ...state.contacts] };
    default:
    return state || { contacts: [] };
  }
}
