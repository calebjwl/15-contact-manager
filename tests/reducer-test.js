import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('add contact', (assert) => {
    const emptyState = { contacts: [] };
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const actionOne = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const actionTwo = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'Nic', lastName: 'Cage' }] };
    const actionThree = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'Johnny', lastName: 'Depp' }] };

    assert.deepEqual(reducer(emptyState, actionOne), { contacts: [{ firstName: 'John', lastName: 'Cena' }] });
    assert.deepEqual(reducer(oldState, actionOne), { contacts: actionOne.data });
    assert.deepEqual(reducer(oldState, actionTwo), { contacts: actionTwo.data });
    assert.deepEqual(reducer(emptyState, actionThree), { contacts: actionThree.data });
    assert.deepEqual(reducer(oldState, actionThree), { contacts: actionThree.data });
  });

  test('remove contact', (assert) => {
    const oneState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }] };
    const multipleState = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }, { firstName: 'Nic', lastName: 'Cage', id: 2 }] };
    const randID = { id: 3 };

    assert.deepEqual(reducer(oneState, oneState), { contacts: [] });
    assert.deepEqual(reducer(multipleState, oneState), { contacts: [{ firstName: 'Nic', lastName: 'Cage', id: 2 }] });
    assert.deepEqual(reducer(multipleState, randID), multipleState);
  });
});
