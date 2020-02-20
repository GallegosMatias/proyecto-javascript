'use strict'

jQuery(document).ready(() => {

  // Slider
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1500
  });

  // Posts
  var posts = [
    {
      title: 'Prueba de titulo 1',
      date: 'Publicado el: ' + moment().format("DD MMMM YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Prueba de titulo 2',
      date: 'Publicado el: ' + moment().format("DD MMMM YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Prueba de titulo 3',
      date: 'Publicado el: ' + moment().format("DD MMMM YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Prueba de titulo 4',
      date: 'Publicado el: ' + moment().format("DD MMMM YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Prueba de titulo 5',
      date: 'Publicado el: ' + moment().format("DD MMMM YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Prueba de titulo 6',
      date: 'Publicado el: ' + moment().format("DD MMMM YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  console.log(posts);

  posts.forEach((item, index) => {
    var post = `
                  <article class="post">
                  <h2>${item.title}</h2>
                  <span class="date">${item.date}</span>
                  <p>${item.content}</p>
                  <a href="#" class="button-more">Leer más</a>
                  </article>
                    `;

        $("#posts").append(post);
  });


  // Selector de temas
  var theme = $('#theme');

  $("#to-green").click(() => {
    theme.attr("href", "green.css");
  });
  $("#to-red").click(() => {
    theme.attr("href", "red.css");
  });
  $("#to-blue").click(() => {
    theme.attr("href", "blue.css");
  });


  // Scroll arriba

  $('.subir').click((e) => {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
