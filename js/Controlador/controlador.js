import Modelo from '../Modelo/modelo.js'
import Vista from '../Vista/index.js'
const Controlador = {
    /* Agregar contenido */
    async mostrarContenido() {
        try {
            const res = await Modelo.mostrarDatosProyectos();
            Vista.mostrarProyectos(res.data)
        } catch (err) {
            console.log(err)
        }
    },

    /*DOM*/
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

        // Inicializa el índice de letra actual
        var currentLetterIndex = 0;

        // Función para mostrar las letras de la palabra una por una
        function typeWord() {
            // Obtén la palabra actual
            var currentWord = words[currentWordIndex];

            // Obtén la parte de la palabra ya escrita
            var typedWord = currentWord.slice(0, currentLetterIndex + 1);

            // Muestra la parte escrita en el elemento dinámico
            dynamicText.textContent = typedWord;

            // Incrementa el índice de letra actual
            currentLetterIndex++;

            // Si se ha mostrado toda la palabra, reinicia los índices
            if (currentLetterIndex === currentWord.length) {
                currentLetterIndex = 0;
                currentWordIndex++;

                // Si se alcanza el final del arreglo, reinicia el índice a 0
                if (currentWordIndex === words.length) {
                    currentWordIndex = 0;
                }
            }
        }

        // Inicia la animación de escritura de palabra cada 200 milisegundos
        setInterval(typeWord, 200);


    },


}
export default Controlador;