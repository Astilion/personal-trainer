const burgerBtn = document.querySelector('.burger-btn')
const navItems = document.querySelector('.navbar__items')

const handleNav = () => {
    navItems.classList.toggle('active')
    document.body.classList.toggle('nav-open')
}

burgerBtn.addEventListener('click', handleNav)