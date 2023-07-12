const Controlador = {
  btn_whatsapp: function () {
    var chatCircle = document.getElementById("chat-circle");
    var chatBox = document.getElementById("chat-box");
    var chatBoxToggle = document.getElementById("chat-box-toggle");

    chatCircle.addEventListener("click", function () {
      chatBox.style.display = "block";
    });

    chatBoxToggle.addEventListener("click", function () {
      chatBox.style.display = "none";
    });


  },

  slider_lugar: function () {

    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },


      breakpoints: {
        620: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        680: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1240: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }
    });
  },
  transitionSmooth: function () {
    // Espera a que se cargue el DOM
    // Obtiene todos los elementos con la clase 'smooth-scroll'
    var smoothScrollLinks = document.getElementsByClassName('smooth-scroll');

    // Itera sobre los enlaces
    for (var i = 0; i < smoothScrollLinks.length; i++) {
      // Agrega un evento de clic a cada enlace
      smoothScrollLinks[i].addEventListener('click', function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Obtiene el destino del enlace a través del atributo href
        var target = this.getAttribute('href');

        // Utiliza el método 'scrollIntoView' para desplazarse suavemente hacia el destino
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  },
  cambioBanner: function () {
    // Obtén el elemento de texto dinámico
    var dynamicText = document.getElementById('dynamic-text');

    // Crea un arreglo con las palabras a intercambiar
    var words = ['web','frontend', 'backend'];

    // Inicializa el índice de palabra actual
    var currentWordIndex = 0;

    // Función para cambiar la palabra cada 2 segundos
    function changeWord() {
      // Obtén la palabra actual
      var currentWord = words[currentWordIndex];

      // Agrega la clase 'spaced-text' para aplicar el espaciado
      dynamicText.innerHTML = '<span class="spaced-text">' + currentWord + '</span>';

      // Incrementa el índice de palabra actual
      currentWordIndex++;

      // Si se alcanza el final del arreglo, reinicia el índice a 0
      if (currentWordIndex === words.length) {
        currentWordIndex = 0;
      }
    }

    // Inicia el cambio de palabra cada 2 segundos
    setInterval(changeWord, 2000);

  },


}
document.addEventListener('DOMContentLoaded', function () {
  Controlador.transitionSmooth();
  Controlador.btn_whatsapp();
  Controlador.slider_lugar();
  Controlador.cambioBanner();
})