export function findAll(data) {
  return {
    type: 'CONTACT@FIND_ALL',
    data,
  };
}

export function create(data = { id: new Date() }) {
  return {
    type: 'CONTACT@CREATE',
    data,
  };
}

export function remove(id) {
  return {
    type: 'CONTACT@REMOVE',
    id,
  };
}
