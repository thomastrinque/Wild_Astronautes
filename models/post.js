'use strict'
class Post {
    constructor(postJSON) {
        this.title = postJSON.title;
        this.excerpt = postJSON.excerpt;
        this.content = postJSON.content;
        this.categorie = postJSON.categorie;
        this.date = postJSON.date;
        this.author = postJSON.author;
        this.img = postJSON.img;
        this.imgsmall = postJSON.imgsmall;
        this.alt = postJSON.alt;
        this.source = postJSON.source;
    }

    doesPostContains(searched) {
        return this.categorie.toLowerCase().includes(searched.toLowerCase());
    }
}
