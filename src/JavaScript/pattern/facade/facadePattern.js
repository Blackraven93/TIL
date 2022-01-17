async function getUsers() {
    return await getFetch(`https://jsonplaceholder.typicode.com/users`)
}

async function getUserPosts(userId) {
    return await getFetch(`https://jsonplaceholder.typicode.com/posts`, { userId })
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

async function getFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => `${param[0]}=${param[1]}`).join('&')
    return await fetch(`${url}?${queryString}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
}

/** Axios
 * function getFetch(url, params = {}) {
 * return axios({
 *      url:url,
 *      method: "GET",
 *      params: params
 *  }).then(res => res.data)
 * }
 */