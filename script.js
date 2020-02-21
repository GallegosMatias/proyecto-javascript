'use strict'

jQuery(document).ready(() => {

  $('#accordion').accordion();

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

  // Login falso
  $('#login form').submit(() => {
  var form_name = $('#form_name').val();
  localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $('#about p');
    about_parrafo.html("<hr><strong>Bienvenido, "+form_name+"</strong>");
    about_parrafo.append(" <a href='#' id='logout'>Cerrar sesion</a>")
    $('#login').hide();

    $("#logout").click(() => {
      localStorage.clear();
      window.reload();
    });
  };

  setInterval(() => {
    var reloj = moment().format("hh:mm:ss");
    $('#time').html(reloj);
  }), 1000

  // validacion formulario contacto
  $.validate({
    lang: 'es',
    errorMessagePosition: 'top',
    scrollToTopOnError: true
  });

  $('form input[name="birth"]').datepicker({
    dateFormat: 'dd-mm-yy'
  });


});
