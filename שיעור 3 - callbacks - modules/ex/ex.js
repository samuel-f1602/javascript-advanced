const user = {
    name: 'gal',
    email: 'gal@email.com',
    password: 'gal123'
}

const changeName = (newName, newEmail, newPassword) => {
    user.name = newName;
    user.email = newEmail;
    user.password = newPassword;
}

const printName = () => {
    console.log(`name: ${user.name}`);
    console.log(`email: ${user.email}`);
    console.log(`password: ${user.password}`);
}

export { changeName, printName };