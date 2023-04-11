const burgerBtn = document.querySelector('.burger-btn')
const navItems = document.querySelector('.navbar__items')
const navItem = document.querySelectorAll('.navbar__item')
const burgerInner = document.querySelector('.burger-btn__inner')

const accordion = document.querySelector('.accordion');
const accordionBtns= document.querySelectorAll('.accordion__btn');

function openAccordionItems() {
    if (this.nextElementSibling.classList.contains('accordion--active')) {
        this.nextElementSibling.classList.remove('accordion--active');
    } else {
        closeAccordionItems();
        this.nextElementSibling.classList.toggle('accordion--active');
    }
}

const closeAccordionItems = () => {
    const allActiveItems = document.querySelectorAll('.accordion__info');
    allActiveItems.forEach(item => item.classList.remove('accordion--active'))
}
const clickOutsideAccordion = e => {
	if (
		e.target.classList.contains("accordion__btn") ||
		e.target.classList.contains("accordion__info") ||
		e.target.classList.contains("accordion__text")
	)
		return;

	closeAccordionItems();
};


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

accordionBtns.forEach(btn => btn.addEventListener("click", openAccordionItems));
window.addEventListener("click", clickOutsideAccordion);