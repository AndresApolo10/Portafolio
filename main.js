const iconBurger = document.querySelector("#icon_burger");
const menu = document.querySelector("#menu");
const menuItems = document.querySelectorAll("#menu a");
const grande = document.querySelector('.content_grande')
const punto  = document.querySelectorAll('.punto')
const enlaces = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande1 = document.querySelector('.grande')
const cerrar = document.querySelector('.cerrar')
const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('.h2')
const listItems = document.querySelectorAll('.contenedor li');
const li1 = document.querySelector('.li1')
const li2 = document.querySelector('.li2')
const li3 = document.querySelector('.li3')
const liAll = document.querySelector('.liAll')

iconBurger.addEventListener("click", function () {
    menu.classList.toggle("show__menu");
});

menuItems.forEach(item => {
    item.addEventListener("click", function () {
        menu.classList.toggle("show__menu");
    });
});

let index = 0; 
const intervalTime = 2000;
let sliderInterval;

function moveToNextSlide() {
    let posicion = index;
    let operacion = posicion * -20;

    grande.style.transform = `translateX(${operacion}%)`;
   
    for (let i = 0; i < punto.length; i++) {
        punto[i].classList.remove('activo');
    }
    
    punto[index].classList.add('activo');

    index = (index + 1) % punto.length;
}

function startSlider() {
    if (sliderInterval) {
        clearInterval(sliderInterval);
    }

    sliderInterval = setInterval(moveToNextSlide, intervalTime);
}

startSlider();

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        
        clearInterval(sliderInterval);

        index = i;
        let operacion = index * -20;

        grande.style.transform = `translateX(${operacion}%)`;

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo');
        });
        punto[i].classList.add('activo');

        sliderInterval = setInterval(moveToNextSlide, intervalTime);
    });
});



enlaces.forEach(( cadaEnlace, i) => {
    enlaces[i].addEventListener('click', (e) => {
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.img').src
        console.log(ruta)

        lightbox.classList.add('activo')
        grande1.setAttribute('src', ruta)

    })
})

enlaces.forEach(( cadaEnlace, i) => {
    enlaces[i].addEventListener('click', (e) => {
        e.preventDefault()
        let ruta1 = cadaEnlace.querySelector('.img1').src
        console.log(ruta1)

        lightbox.classList.add('activo')
        grande1.setAttribute('src', ruta1)

    })
})

enlaces.forEach(( cadaEnlace, i) => {
    enlaces[i].addEventListener('click', (e) => {
        e.preventDefault()
        let ruta2 = cadaEnlace.querySelector('.img2').src
        console.log(ruta2)

        lightbox.classList.add('activo')
        grande1.setAttribute('src', ruta2)

    })
})

cerrar.addEventListener('click', () => {
    lightbox.classList.remove('activo')
})

h2.forEach(( cadaH2, i) => {
    h2[i].addEventListener('click', () => {
        
        bloque.forEach(( cadaBloque, i) => {
            bloque[i].classList.remove('activo')
        })
        bloque[i].classList.add('activo')
    })
})



listItems.forEach((item) => {
    item.addEventListener('click', () => {
       
        listItems.forEach(li => li.classList.remove('active'));
        const images = document.querySelectorAll('.subcontenedor img');
        images.forEach(img => img.classList.remove('activeImagen'));

        item.classList.add('active');

        if (item.id === 'todos') {

            images.forEach(img => img.classList.add('activeImagen'));
        } else {

            const imageId = `${item.id}-image`; 
            const image = document.getElementById(imageId);
            if (image) {
                image.classList.add('activeImagen');
            }
        }
    });
});


// li1.addEventListener('click', () => {
//     console.log('hiadsa')
//     // Verifica si el elemento ya tiene la clase 'active'
//     if (li1.classList.contains('active')) {
//         // Si la tiene, quítala
//         li1.classList.remove('active');
//         contenedor1.classList.remove('active');

//     } else {
//         // Si no la tiene, agrégala
//         li1.classList.add('active');
//         contenedor1.classList.add('active');
//     }
// });

// li1.forEach(( cadaLi, i) => {
//     li1[i].addEventListener('click', () => {
       
//         li1.forEach(( cadaLi, i) => {
//             li[i].classList.remove('activo')
//             contenedor[i].classList.remove('activo')
//         })
//         li2.forEach(( cadaLi, i) => {
//             li2[i].classList.remove('activo')
//             contenedor1[i].classList.remove('activo')
//             contenedor1[i+1].classList.remove('activo')
//             contenedor1[i+2].classList.remove('activo')
//         })
//         li[i].classList.add('activo')
//         contenedor[i].classList.add('activo')
//     })
// })

// li2.forEach(( cadaLi, i) => {
//     li2[i].addEventListener('click', () => {
//         li2.forEach(( cadaLi, i) => {
//             li2[i].classList.remove('activo')
//             li[i].classList.remove('activo')
//             li[i+1].classList.remove('activo')
//             li[i+2].classList.remove('activo')
//             contenedor[i].classList.remove('activo')
//         })
//         li2[i].classList.add('activo')
//         contenedor[i].classList.remove('activo')
//         contenedor[i+1].classList.remove('activo')
//         contenedor[i+2].classList.remove('activo')
//         contenedor1[i].classList.add('activo')
//         contenedor1[i+1].classList.add('activo')
//         contenedor1[i+2].classList.add('activo')
//     })
// })