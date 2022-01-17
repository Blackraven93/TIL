class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}


class User {
    constructor(name, { age, phone = '010-1111-1111', address } = {}) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

let user = new User("Raven", { age: 10, phone: '010-0111-1111', address: new Address("1", "Main") })
console.log(user)