'use strict'
class Post {
    constructor(postJSON) {
        this.id = postJSON.id;
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

    doesPostContains(id, searched, filter) {
        if (id !== '') {
            if (Number(this.id) === Number(id)) {
                return true;
            } else {
                return false;
            }
        } else if (filter !== '') {
            return this.categorie.toLowerCase().includes(filter.toLowerCase());
        } else {
            return this.title.toLowerCase().includes(searched.toLowerCase());
        }
    }
}
