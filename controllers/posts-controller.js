(function() {
    'use strict'

    function displayPost(id) {
        let req = new XMLHttpRequest();
        let url = "/posts.json";
        req.open('GET', url, true);

        req.onreadystatechange = function(e) {
            if(req.readyState === 4) {
                if(req.status === 200) {
                    let postsJSON = JSON.parse(req.responseText);
                    let posts = new Posts(postsJSON);
                    document.querySelector('#content-full').innerHTML = `

                    <div id="content-full">
                     <div id="img-intro">
                       <img src="${posts.data[id].img}" alt="constellations" />
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
                   </div>
                 </div>`;


                }
                else {
                    alert(`Could not load ${url}`);
                }
            }
        }
        req.send();
    }

    let post1 = document.querySelector("#btn-slider-post-1");
    post1.addEventListener("click", function(){displayPost(0);}, false);
    let post2 = document.querySelector("#btn-slider-post-2");
    post2.addEventListener("click", function(){displayPost(1);}, false);
    let post3 = document.querySelector("#btn-slider-post-3");
    post3.addEventListener("click", function(){displayPost(2);}, false);

    let postLast = document.querySelector("#img-post");
    postLast.addEventListener("click", function(){displayPost(0);}, false);


})();
