var swiper = new Swiper (".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-paginattion",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
})

var swiper = new Swiper (".mySwiper-2", {
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        },
    }
})


let tabInputs= document.querySelectorAll(".tabInput");
tabInputs.forEach(function(input) {

    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper'+id);
        thisSwiper.swiper.update();
    })
})

// Función para obtener y mostrar el nombre de usuario
document.addEventListener('DOMContentLoaded', function () {
    // Obtener los datos del usuario almacenados en Local Storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
        // Extraer el nombre de usuario
        const username = storedUser.username;

        // Mostrar el nombre de usuario en el lugar deseado (por ejemplo, un elemento con id 'username-display')
        document.getElementById('username-display').textContent = `Bienvenido, ${username}`;
    } else {
        console.log('No se encontró ningún usuario registrado.');
    }
});