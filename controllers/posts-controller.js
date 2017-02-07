(function() {
  'use strict'

  function displayIndexContent() {
    document.querySelector('#content-full').innerHTML = `<div id="site-content">
    <div id="slider-wrap">
    <div id="slider">
    <div>
    <div class="banner-content-right">
    Spectacle exceptionnel : une collision...<span id="btn-slider-post-1" class="btn">En savoir plus</span>
    </div>
    <img src="/medias/slider/constellations-1853915_1920.jpg" alt="constellations" />
    </div>
    <div>
    <div class="banner-content-right">
    L'étoile de Tabby a peut-être...<span id="btn-slider-post-2" class="btn">En savoir plus</span>
    </div>
    <img src="/medias/slider/andromeda-galaxy-619797_1920.jpg" alt="andromeda galaxy" />
    </div>

    <div>
    <div class="banner-content-right">
    ISS : la sortie de Thomas Pesquet...<span id="btn-slider-post-3" class="btn">En savoir plus</span>
    </div>
    <img src="/medias/slider/moon-1817885_1920.jpg" alt="moon" />
    </div>
    </div>
    </div>

    <div id="content">
    <div id="last-post">
    <div id="the-last-post">
    <h2>Le dernier article</h2>
    </div>

    <div id="img-post">
    <img src="/ressources/photos/astronomy-1867616_1920.jpg" width="100%" height="100%">
    <div id="title-last-post">
    Spectacle exceptionnel :une collision de deux étoiles sera visible à l’œil nu en 2022
    </div>
    </div>
    </div>
    <div id="pres-asso">
    <div id="title-asso">
    <h2>Les Wilds Astronautes</h2>
    </div>
    <div id="body-asso">
    <div id="top-lane">
    <div id="text1">
    <p><img src="/ressources/photos/elisa.jpg" alt="elisa" />Lorem ipsum dolor sit amet, cr adipisicing elit. Ipsam cumque iusto danimi sint, ducimus nobis aliquid minus mollitia veniam, delectus alias suscipit.
    <br/>

    </br/>Ipsam cumque iusto dignissiimi sint, ducimus nobis aliquid minus mollitia veniam, delectus alias suscipit.</p>

    </div>

    </div>
    <div id="bottom-lane">
    <div id="text2">
    <p><img src="/ressources/photos/regis.jpg" alt="régis" />Lorem ipsum dolor sit amet, cr adipisicing elit. Ipsam cumque iusto danimi sint, ducimus nobis aliquid minus mollitia veniam, delectus alias suscipit.
    <br/>

    </br/>Ipsam cumque iusto dignissiimi sint, ducimus nobis aliquid minus mollitia veniam, delectus alias suscipit.</p>

    </div>
    </div>
    </div>
    </div>

    </div>


    `;
  }

  function displayIndexPage() {
    document.querySelector('#site-container').innerHTML = `
      <div id="site-pusher">
          <header id="header">
              <div class="header-icon" id="header-icon">
                  <div class="band-icon-header"></div>
                  <div class="band-icon-header"></div>
                  <div class="band-icon-header"></div>
              </div>

              <div id="logo">
                  <div id="logo-img">
                      <a href="#" id="logo-img-link"><img src="/medias/imgsite/milky-way logo.png" height="40"></a>
                  </div>
                  <div id="logo-txt"><a href="#" id="logo-txt-link"> Wild Astronautes</a></div>
              </div>

              <nav id="main-menu">
                  <ul>
                      <li class="menu-item">
                          <a href="#" id="home-link"><img src="/medias/imgsite/2370.png" width="35" height="35"></a>
                      </li>
                      <li class="menu-item" id="display-posts">Articles</li>
                  </ul>
              </nav>
          </header>
  <div id="content-full">
  </div>

              <footer>
                  <div id="footer-logo">
                      <h2><a href="#" id="footer-home-link">Wild Astronauts</a></h2></div>
                      <div id="footer-utiles">
                          <ul>
                              <li>Mentions Légales</li>
                          </ul>
                      </div>
                      <div id="footer-reseaux">
                          <a href="#" id="cgu-link">
                              <p>CGU</p>
                          </a>
                      </div>
                  </footer>
              </div>
              <div class="site-cache" id="site-cache">
              </div>
          </div>`;
  }

  function displayPost(postsJSON, id) {
    window.location.hash = id;
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
    window.location.hash = "posts";

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
    }, false);

    let searchBtn = document.querySelector("#search-btn");
    let search = document.querySelector('#search');
    searchBtn.addEventListener("click", () => {
      display('posts', search.value, '');
    }, false);

    search.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        display('posts', search.value, '');
      }
    }, false);

  }

  function addEventOnIndex() {
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
  }

  function addEventOnHomeFooter() {
    let logoImgLink = document.querySelector("#logo-img-link");
    logoImgLink.addEventListener("click", () => {
      display('index');
    }, false);

    let logoTxtLink = document.querySelector("#logo-txt-link");
    logoTxtLink.addEventListener("click", () => {
      display('index');
    }, false);

    let homeLink = document.querySelector("#home-link");
    homeLink.addEventListener("click", () => {
      display('index');
    }, false);

    let posts = document.querySelector("#display-posts");
    posts.addEventListener("click", function() {
      display('posts');
    }, false);

    let footerHomeLink = document.querySelector("#footer-home-link");
    footerHomeLink.addEventListener("click", () => {
      display('index');
    }, false);

    let cguLink = document.querySelector("#cgu-link");
    cguLink.addEventListener("click", () => {
      display('index');
    }, false);
  }

  function display(id, search = '', filter = '') {
    let req = new XMLHttpRequest();
    let url = "/posts.json";
    req.open('GET', url, true);

    req.onreadystatechange = function(e) {

      if (req.readyState === 4) {
        if (req.status === 200) {
          let postsJSON = JSON.parse(req.responseText);

          if (id === 'index') {
            console.log('index');
            displayIndexPage();
            displayIndexContent();
            addEventOnHomeFooter();
            addEventOnIndex();



            $('#slider').slick({
              autoplay: true,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              adaptiveHeight: false,
              accessibility: true,
              arrows: true,
              variableWidth: false
            });

          } else if (id === 'posts') {
            console.log('posts');
            displayIndexPage();

            displayPosts(postsJSON, search, filter);
            addEventOnHomeFooter();
            addEventOnArticles();

          } else {
            console.log('post');
            displayIndexPage();

            displayPost(postsJSON, id);
            addEventOnHomeFooter();
          }

          (function($){
            /* Quand je clique sur l'icône hamburger je rajoute une classe au body */
            $('#header-icon').click(function(e){
              e.preventDefault();
              $('body').toggleClass('with-sidebar');
            });

            /* Je veux pouvoir masquer le menu si on clique sur le cache */
            $('#site-cache').click(function(e){
              $('body').removeClass('with-sidebar');
            });
          })(jQuery);
        } else {
          alert(`Could not load ${url}`);
        }
      }
    }
    req.send();
  }



  function loadContent() {
    if (window.location.hash === "#" || window.location.hash === "") {
      display('index');
    } else if (!isNaN(window.location.hash.substr(1))) {
      display(window.location.hash.substr(1));
    } else if (window.location.hash === "#posts") {
      display('posts');
    }

    window.scroll(0,0);
  }



  loadContent();

  window.onhashchange = (e) => {
    loadContent();
  }




})();
