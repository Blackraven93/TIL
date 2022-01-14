class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }


    hasAccess() {
        return this.name === 'Raven'
    }
}

const users = [
    new User(1, 'Bob'),
    new User(2, 'Raven')
]

const getUser = id => users.find(user => user.id === id);

const printUser = id => {
    const user = getUser(id)

    let name = "Guest"
    if (user !== null && user.name !== null) name = user.name
    console.log(`Hello ${name}`)

    if (user !== null && user.hasAccess !== null && user.hasAccess()) {
        console.log("You have access");
    } else {
        console.log("You are not allowed here");
    }

}