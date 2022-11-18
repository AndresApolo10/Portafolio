const iconBurger = document.querySelector("#icon_burger");
const menu = document.querySelector("#menu");
const grande = document.querySelector('.content_grande')
const punto  = document.querySelectorAll('.punto')
const enlaces = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande1 = document.querySelector('.grande')
const cerrar = document.querySelector('.cerrar')
const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('.h2')
const li = document.querySelectorAll('.li1')
const li2 = document.querySelectorAll('.li2')
const contenedor = document.querySelectorAll('.imagen')
const contenedor1 = document.querySelectorAll('.imagen1')


iconBurger.addEventListener("click", function () {
    menu.classList.toggle("show__menu");
});

punto.forEach( ( cadaPunto, i) => {
    punto[i].addEventListener('click', () => {

        let posicion = i
        let operacion = posicion * -20

        grande.style.transform = `translateX(${ operacion }%)`

        punto.forEach(( cadaPunto, i) => {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
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

li.forEach(( cadaLi, i) => {
    li[i].addEventListener('click', () => {

        li.forEach(( cadaLi, i) => {
            li[i].classList.remove('activo')
            contenedor[i].classList.remove('activo')
        })
        li2.forEach(( cadaLi, i) => {
            li2[i].classList.remove('activo')
            contenedor1[i].classList.remove('activo')
            contenedor1[i+1].classList.remove('activo')
            contenedor1[i+2].classList.remove('activo')
        })
        li[i].classList.add('activo')
        contenedor[i].classList.add('activo')
    })
})

li2.forEach(( cadaLi, i) => {
    li2[i].addEventListener('click', () => {

        li2.forEach(( cadaLi, i) => {
            li2[i].classList.remove('activo')
            li[i].classList.remove('activo')
            li[i+1].classList.remove('activo')
            li[i+2].classList.remove('activo')
            contenedor[i].classList.remove('activo')
        })
        li2[i].classList.add('activo')
        contenedor[i].classList.remove('activo')
        contenedor[i+1].classList.remove('activo')
        contenedor[i+2].classList.remove('activo')
        contenedor1[i].classList.add('activo')
        contenedor1[i+1].classList.add('activo')
        contenedor1[i+2].classList.add('activo')
    })
})