'use strict'
class Posts {
    constructor(postsJSON) {
        this.data = [];

        postsJSON.forEach((postJSON) => {
            let post = new Post(postJSON);
            this.data.push(post);
        })

        this.unfilteredData = this.data;
    }

    filterPosts(id, searched, filter) {
        this.data = this.unfilteredData;
        this.data = this.data.filter((element) => {
            return element.doesPostContains(id, searched, filter);
        });
    }
}
