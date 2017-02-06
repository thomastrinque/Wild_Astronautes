(function() {
    'use strict'

    function displayPost(postsJSON, id) {
        let posts = new Posts(postsJSON);

        posts.filterPosts(id, '', '');
        let post = posts.data[0];

        document.querySelector('#content-full').innerHTML = `


    <div id="img-intro">
    <img src="${post.img}" alt="${post.alt}" />
    <div id="desc-post">
    <div id="cat-post">
    <p>${post.categorie}</p>
    </div>
    <div id="title-post">
    <p>${post.title}</p>
    </div>
    </div>
    </div>
    <div id="post-body">
    <div id="info-post">
    <div id="nomAuteur">${post.author}</div>
    <div id="datePubli">${post.date}</div>
    </div>
    <div id="body-post">
     ${post.content}
    </div>
    </div>`;
    }

    function displayPosts(postsJSON, search, filter) {
        let posts = new Posts(postsJSON);

        if (filter !== '') {
            posts.filterPosts('', search, filter);
        }

        if (search !== '') {
            posts.filterPosts('', search, filter);
        }

        let html = `<div id="list-article">
    <div id="titleli">
    <h1>&nbsp;&nbsp;Nos Articles&nbsp;&nbsp;</h1>
    </div>
    <div id="filters"><select name="pays" id="country">
    <option disabled="disabled" selected="selected">Catégories</option>
    <option value="">Tous les articles</option>
    <option value="Etoiles">Etoiles</option>
    <option value="Univers">Univers</option>
    <option value="Espace">Espace</option>
    </select>
    <input id="search" type="text" value="${search}" />
    <input id="search-btn" type="button" value="Rechercher" />
    </div>`;
        let i = 0;
        let j = 1;
        posts.data.forEach((post) => {
            if (i > 1) {
                i = 0;
            }

            if (i === 0) {
                html += '<div class="list-container">';
            }

            html += `<div class="preview_articles" id="btn-post-${post.id}">
      <img src="${post.imgsmall}" alt="${post.alt}">
      <div class="txt2">
      <h1>${post.title}</h1>
      </div>
      <div class="txt">
      <h2>${post.title}</h2>
      <p>${post.excerpt}</p>
      <span class="info">En savoir plus</span>
      </div>
      </div>`;

            if (i === 1) {
                html += '</div>';
            }

            i++;
            j++;
        })

        document.querySelector('#content-full').innerHTML = html + '</div>';
    }

    function addEventOnArticles() {
        let post1 = document.querySelector("#btn-post-1");
        if (post1 !== null) {
            post1.addEventListener("click", function() {
                display(1);
            }, false);
        }

        let post2 = document.querySelector("#btn-post-2");

        if (post2 !== null) {
            post2.addEventListener("click", function() {
                display(2);
            }, false);
        }

        let post3 = document.querySelector("#btn-post-3");
        if (post3 !== null) {
            post3.addEventListener("click", function() {
                display(3);
            }, false);
        }

        let post4 = document.querySelector("#btn-post-4");
        if (post4 !== null) {
            post4.addEventListener("click", function() {
                display(4);
            }, false);
        }

        let filters = document.querySelector("#country");
        filters.addEventListener("change", function() {
            display('posts', '', this.value);
        });

        let searchBtn = document.querySelector("#search-btn");
        let search = document.querySelector('#search');
        searchBtn.addEventListener("click", () => {
            display('posts', search.value, '');
        });

        search.addEventListener("keypress", (e) => {
          if (e.keyCode === 13) {
            display('posts', search.value, '');
          }
        });

    }

    function display(id, search = '', filter = '') {
        let req = new XMLHttpRequest();
        let url = "/posts.json";
        req.open('GET', url, true);

        req.onreadystatechange = function(e) {

            if (req.readyState === 4) {
                if (req.status === 200) {
                    let postsJSON = JSON.parse(req.responseText);

                    if (id === 'posts') {
                        displayPosts(postsJSON, search, filter);
                        addEventOnArticles();
                    } else {
                        displayPost(postsJSON, id);
                    }
                } else {
                    alert(`Could not load ${url}`);
                }
            }
        }
        req.send();
    }

    let postSlider1 = document.querySelector("#btn-slider-post-1");
    postSlider1.addEventListener("click", function() {
        display(1);
    }, false);
    let postSlider2 = document.querySelector("#btn-slider-post-2");
    postSlider2.addEventListener("click", function() {
        display(2);
    }, false);
    let postSlider3 = document.querySelector("#btn-slider-post-3");
    postSlider3.addEventListener("click", function() {
        display(3);
    }, false);

    let postLast = document.querySelector("#img-post");
    postLast.addEventListener("click", function() {
        display(1);
    }, false);

    let posts = document.querySelector("#display-posts");
    posts.addEventListener("click", function() {
        display('posts');
    }, false);
})();
