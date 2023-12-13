function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const bodyLock = document.body;

	navBtn.addEventListener('click', function(){
		if (menuIcon.classList.contains('nav-icon--active')) {
		  menuIcon.classList.remove('nav-icon--active');
		  nav.classList.remove('mobile-nav--open');
		  bodyLock.classList.remove('no-scroll');
		} else {
		  menuIcon.classList.add('nav-icon--active');
		  nav.classList.add('mobile-nav--open');
		  bodyLock.classList.add('no-scroll');
		}
	});

	 nav.addEventListener('click', function(){
		this.classList.remove('mobile-nav--open');
		menuIcon.classList.remove('nav-icon--active');
		bodyLock.classList.remove('no-scroll');
	});
}

export default mobileNav;