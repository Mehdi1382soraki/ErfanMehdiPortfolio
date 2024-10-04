import { banner } from "../COMPONENTS/banner/banner-class.js"

let headerBrandName = document.querySelector('.header__brand-name')
let navMenu = document.querySelector('.header__brand-name-div')
let headerOptions = document.querySelector('.header__options')
let modalToTop = document.querySelector('.modalToTop')
let topics = document.querySelector('.topics')
let header = document.querySelector('header')

/* ====== When you scroll the modalToTop will be appered at the bottom of the page ====== */

window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop >= 91) {
        modalToTop.style.display = 'flex'
        modalToTop.style.top = `${document.documentElement.scrollTop + this.window.innerHeight - 70}px`
    }
})

/* ====== When the site loaded these two functions will be executed ====== */

window.addEventListener('load', () => {
    setMenuSize()
    changeBannersPlace()
})

/* ====== When the site resized these two functions will be executed ====== */

window.addEventListener('resize', (e) => {
    setMenuSize()
    changeBannersPlace()
})

/* ====== When the modal clicked the site scrolls to the top ====== */

modalToTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0
})

/* ====== When the brand name is clicked the site will be refreshed ====== */

headerBrandName.addEventListener('click', () => {
    location.assign('https://rockpaperscissors.ir')
})

/**
 * this void function will decide to show the banners in the header option or in a specific division
 */

function changeBannersPlace () {
    if (window.innerWidth <= 767 && headerOptions.lastElementChild.className != 'topics') {
        headerOptions.append(topics)
    } else if (window.innerWidth > 767 && header.lastElementChild.className != 'topics') {
        header.append(topics)
    }
}

/**
 * this void function will give the nav bar menu specific style when the size of the site will get less than 767 px
 */

function setMenuSize () {
    if (window.innerWidth <= 767) {
        navMenu.style.width = `${window.innerWidth-80}px`
    } else {
        navMenu.style.width = `fit-content`
    }
}