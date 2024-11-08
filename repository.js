
const users = [
    { id: 1, name: 'Miftahul Rizqha' },
    { id: 2, name: 'Anggi Safitri' },
]

function findUserById(id) {
    return users.find(user => user.id === id) || null;
}

export { findUserById }
