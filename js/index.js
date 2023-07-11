const Controlador ={
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
}
document.addEventListener('DOMContentLoaded', function () {
    Controlador.transitionSmooth();
    Controlador.btn_whatsapp();
    Controlador.slider_lugar();
  })
  