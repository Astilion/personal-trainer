const burgerBtn = document.querySelector('.burger-btn')
const navItems = document.querySelector('.navbar__items')
const navItem = document.querySelectorAll('.navbar__item')
const burgerInner = document.querySelector('.burger-btn__inner')


const handleNav = () => {
    navItems.classList.toggle('active')
    document.body.classList.toggle('nav-open')

}
const closeNav = () => {
	navItems.classList.remove('active')
	document.body.classList.remove('nav-open')
}



burgerBtn.addEventListener('click', handleNav)
navItem.forEach(item => {
    item.addEventListener('click', closeNav)
})