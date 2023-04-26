let burgerBtn,
	navItems,
	navItem,
	burgerInner,
	accordion,
	accordionBtns,
	allOffersBtn,
	offersList,
	offersListNavItems,
	footerYear,
	scrollSpySections,
	sliderBox,
	leftBtn,
	rightBtn,
	carouselImages,
	carouselWidth,
	carouselSpeed,
	startCarousel;

const prepareDOMElements = () => {
	burgerBtn = document.querySelector(".burger-btn");
	navItems = document.querySelector(".navbar__items");
	navItem = document.querySelectorAll(".navbar__item");
	burgerInner = document.querySelector(".burger-btn__inner");
	accordion = document.querySelector(".accordion");
	accordionBtns = document.querySelectorAll(".accordion__btn");
	allOffersBtn = document.querySelector('[data-id="all-offers"]');
	offersList = document.querySelectorAll(".offers__section");
	offersListNavItems = document.querySelectorAll(".offers__nav-item");
	footerYear = document.querySelector(".footer__year");
	scrollSpySections = document.querySelectorAll(".scrollspy");
	sliderBox = document.querySelector(".slider__box");
	leftBtn = document.querySelector(".btn__left");
	rightBtn = document.querySelector(".btn__right");
	carouselImages = document.querySelectorAll(".slider__img");
	carouselWidth = 350;
	carouselSpeed = 3000;
};

const prepareDOMEvents = () => {
	accordionBtns.forEach(btn =>
		btn.addEventListener("click", openAccordionItems)
	);
	window.addEventListener("click", clickOutsideAccordion);
	allOffersBtn.addEventListener("click", showAllOffersList);
	offersListNavItems.forEach(item =>
		item.addEventListener("click", showOffersList)
	);
	window.addEventListener("scroll", handleScrollSpy);
	rightBtn.addEventListener("click", handleRightArrow);
	leftBtn.addEventListener("click", handleLeftArrow);
	burgerBtn.addEventListener("click", handleNav);
	navItem.forEach(item => {
		item.addEventListener("click", closeNav);
	});
};

const handleScrollSpy = () => {
	if (document.body.classList.contains("main-page")) {
		const sections = [];

		scrollSpySections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 75) {
				sections.push(section);
				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				);
				navItem.forEach(menuItem =>
					menuItem.classList.remove("current-section")
				);
				activeSection.classList.add("current-section");
			}
		});
	}
};

const handleNav = () => {
	navItems.classList.toggle("active");
	document.body.classList.toggle("nav-open");
};
const closeNav = () => {
	navItems.classList.remove("active");
	document.body.classList.remove("nav-open");
};

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains("accordion--active")) {
		this.nextElementSibling.classList.remove("accordion--active");
		this.querySelector(".ti-plus").style.display = "inline";
		this.querySelector(".feather").style.display = "none";
	} else {
		closeAccordionItems();
		this.nextElementSibling.classList.toggle("accordion--active");
		this.querySelector(".ti-plus").style.display = "none";
		this.querySelector(".feather").style.display = "inline";
	}
}

const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll(".accordion__info");
	allActiveItems.forEach(item => {
		item.previousElementSibling.querySelector(".feather").style.display =
			"none";
		item.previousElementSibling.querySelector(".ti-plus").style.display =
			"inline";
		item.classList.remove("accordion--active");
	});
};
const clickOutsideAccordion = e => {
	if (
		e.target.classList.contains("accordion__btn") ||
		e.target.classList.contains("accordion__info") ||
		e.target.classList.contains("accordion__text")
	)
		return;
	closeAccordionItems();
};

const showOffersList = e => {
	if (e.target.dataset.id === "all-offers") return;
	offersList.forEach(el => {
		el.style.display = "none";
	});

	offersListNavItems.forEach(el => {
		el.classList.remove("offers__nav-item--active");
	});

	const clickedItem = document.querySelector(
		`[data-id="${e.target.dataset.id}"]`
	);
	clickedItem.classList.add("offers__nav-item--active");

	document.getElementById(e.target.dataset.id).style.display = "flex";
};

const showAllOffersList = () => {
	offersList.forEach(el => {
		el.style.display = "flex";
	});

	offersListNavItems.forEach(el => {
		el.classList.remove("offers__nav-item--active");
	});

	allOffersBtn.classList.add("offers__nav-item--active");
};

const handleCarousel = () => {
	index++;
	changeImage();
};

const changeImage = () => {
	if (index > carouselImages.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = carouselImages.length - 1;
	}

	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`;
};

const handleRightArrow = () => {
	index++;
	resetInterval();
};

const handleLeftArrow = () => {
	index--;
	resetInterval();
};

const resetInterval = () => {
	changeImage();
	clearInterval(startCarousel);
	startCarousel = setInterval(handleCarousel, carouselSpeed);
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year;
};

prepareDOMElements();
prepareDOMEvents();
handleCurrentYear();
let index = 0;
startCarousel = setInterval(handleCarousel, carouselSpeed);
