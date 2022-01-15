async function getUsers() {
    return await fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
}

async function getUserPosts(userId) {
    return await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
}

getUsers().then(users => {
    users.forEach(user => {

        getUserPosts(user.id).then(posts => {
            console.log(posts)
            console.log(user.name)
            console.log(posts.length)
        })
    })
})