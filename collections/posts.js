'use strict'
class Posts {
    constructor(postsJSON) {
        this.data = [];

        postsJSON.forEach((postJSON) => {
            let post = new Post(postJSON);
            this.data.push(post);
        })
    }
}
