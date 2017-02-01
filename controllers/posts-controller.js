(function() {
    'use strict'

    function displayPost(postsJSON, id) {
        let posts = new Posts(postsJSON);
        document.querySelector('#content-full').innerHTML = `


         <div id="img-intro">
           <img src="${posts.data[id].img}" alt="${posts.data[id].alt}" />
           <div id="desc-post">
             <div id="cat-post">
              <p>${posts.data[id].categorie}</p>
            </div>
            <div id="title-post">
              <p>${posts.data[id].title}</p>
            </div>
          </div>
        </div>
        <div id="post-body">
          <div id="info-post">
           <div id="nomAuteur">${posts.data[id].author}</div>
           <div id="datePubli">${posts.data[id].date}</div>
         </div>
         <div id="body-post">
            ${posts.data[id].content}
         </div>
       </div>`;
    }

    function displayPosts(postsJSON) {
        let posts = new Posts(postsJSON);
        let html = `<div id="list-article">
              <div id="titleli">
                <h1>&nbsp;&nbsp;Nos Articles&nbsp;&nbsp;</h1>
              </div>`;
        let i = 0;
        let j = 1;
        posts.data.forEach((post) => {
            if(i > 2) {
                i = 0;
            }

            if(i === 0) {
                html += '<div class="list-container">';
            }

            html += `<div class="preview_articles" id="btn-post-${j}">
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

            if(i === 2) {
                html += '</div>';
            }

            i++;
            j++;
        })

        document.querySelector('#content-full').innerHTML = html + '</div>';
    }

    function addEventOnArticles() {
        let post1 = document.querySelector("#btn-post-1");
        post1.addEventListener("click", function(){display(0);}, false);
        let post2 = document.querySelector("#btn-post-2");
        post2.addEventListener("click", function(){display(1);}, false);
        let post3 = document.querySelector("#btn-post-3");
        post3.addEventListener("click", function(){display(2);}, false);
        let post4 = document.querySelector("#btn-post-4");
        post4.addEventListener("click", function(){display(3);}, false);
    }

    function display(id) {
        let req = new XMLHttpRequest();
        let url = "/posts.json";
        req.open('GET', url, true);

        req.onreadystatechange = function(e) {
            if(req.readyState === 4) {
                if(req.status === 200) {
                    let postsJSON = JSON.parse(req.responseText);

                    if(id === 'posts') {
                        displayPosts(postsJSON);
                        addEventOnArticles();
                    }
                    else {
                        displayPost(postsJSON, id);
                    }
                }
                else {
                    alert(`Could not load ${url}`);
                }
            }
        }
        req.send();
    }

    let postSlider1 = document.querySelector("#btn-slider-post-1");
    postSlider1.addEventListener("click", function(){display(0);}, false);
    let postSlider2 = document.querySelector("#btn-slider-post-2");
    postSlider2.addEventListener("click", function(){display(1);}, false);
    let postSlider3 = document.querySelector("#btn-slider-post-3");
    postSlider3.addEventListener("click", function(){display(2);}, false);

    let postLast = document.querySelector("#img-post");
    postLast.addEventListener("click", function(){display(0);}, false);

    let posts = document.querySelector("#display-posts");
    posts.addEventListener("click", function(){display('posts');}, false);
})();
