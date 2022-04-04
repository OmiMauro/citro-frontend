addEventListener('DOMContentLoaded', (event) => {
	// Navbar shrink function
	const navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector('#mainNav')
		if (!navbarCollapsible) {
			return
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove('navbar-shrink')
		} else {
			navbarCollapsible.classList.add('navbar-shrink')
		}
	}

	// Shrink the navbar
	navbarShrink()

	// Shrink the navbar when page is scrolled
	document.addEventListener('scroll', navbarShrink)

	// Activate Bootstrap scrollspy on the main nav element
	/* const mainNav = document.body.querySelector('#mainNav')
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74
    })
  }; */

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector('.navbar-toggler')
	const responsiveNavItems = [].slice.call(
		document.querySelectorAll('#navbarResponsive .nav-link')
	)
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener('click', () => {
			if (window.getComputedStyle(navbarToggler).display !== 'none') {
				navbarToggler.click()
			}
		})
	})
})

window.addEventListener('DOMContentLoaded', (event) => {
	// Toggle the side navigation
	const sidebarToggle = document.body.querySelector('#sidebarToggle')
	if (sidebarToggle) {
		// Uncomment Below to persist sidebar toggle between refreshes
		// if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
		//     document.body.classList.toggle('sb-sidenav-toggled');
		// }
		sidebarToggle.addEventListener('click', (event) => {
			event.preventDefault()
			document.body.classList.toggle('sb-sidenav-toggled')
			localStorage.setItem(
				'sb|sidebar-toggle',
				document.body.classList.contains('sb-sidenav-toggled')
			)
		})
	}
})
