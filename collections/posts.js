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

    filterPosts(searched) {
        this.data = this.unfilteredData;
        this.data = this.data.filter((element) => {
            return element.doesPostContains(searched);
        });
    }
}
