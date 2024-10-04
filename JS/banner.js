import { banner } from "../COMPONENTS/banner/banner-class.js"

let navMenu = document.querySelector('.header__brand-name-div')
let topics = document.querySelector('.topics')
let headerOptions = document.querySelector('.header__options')
let header = document.querySelector('header')
let modalToTop = document.querySelector('.modalToTop')
let headerBrandName = document.querySelector('.header__brand-name')

modalToTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0
})

headerBrandName.addEventListener('click', () => {
    location.assign('https://rockpaperscissors.ir')
})

window.addEventListener('load', () => {
    setMenuSize()
    changeBannersPlace()
})

window.addEventListener('resize', (e) => {
    setMenuSize()
    changeBannersPlace()
})

function changeBannersPlace () {
    if (window.innerWidth <= 767 && headerOptions.lastElementChild.className != 'topics') {
        headerOptions.append(topics)
    } else if (window.innerWidth > 767 && header.lastElementChild.className != 'topics') {
        header.append(topics)
    }
}

function setMenuSize () {
    if (window.innerWidth <= 767) {
        navMenu.style.width = `${window.innerWidth-80}px`
    } else {
        navMenu.style.width = `fit-content`
    }
}

window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop >= 91) {
        modalToTop.style.display = 'flex'
        modalToTop.style.top = `${document.documentElement.scrollTop + this.window.innerHeight - 70}px`
    }
})