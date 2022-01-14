class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}


class User {
    constructor(name) {
        this.name = name
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name)
    }

    setAge(age) {
        this.user.age = age
        return this
    }

    setPhone(phone) {
        this.user.phone = phone
        return this
    }

    setAge(address) {
        this.user.address = address
        return this
    }

    build() {
        return this.user
    }
}

let user = new UserBuilder('Bob').setAge(10).setPhone('010-1111-1111').build()
console.log(user)