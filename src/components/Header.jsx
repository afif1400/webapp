import React, { useEffect, useRef, useState } from "react";
import {
	UilEstate,
	UilUser,
	UilFile,
	UilBag,
	UilFileContract,
	UilMessage,
	UilMultiply,
	UilApps,
} from "@iconscout/react-unicons";

const Header = () => {
	const [open, setOpen] = useState(false);
	const [themeButton, setThemeButton] = useState('uil-moon')
	const headerRef = useRef(null)

	const handleToggle = () => {
		setOpen(!open);
	};

	const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light'
	const getCurrentIcon = () => themeButton === 'uil-sun' ? 'uil-moon' : 'uil-sun'

	const handleThemeChange = () => {

		document.body.classList.toggle('dark-theme')
		if (themeButton === 'uil-moon') {
			setThemeButton('uil-sun')
		}
		else {
			setThemeButton('uil-moon')
		}


		localStorage.setItem('selected-theme', getCurrentTheme())
		localStorage.setItem('selected-icon', getCurrentIcon())

	}

	useEffect(() => {
		if (window && headerRef) {
			const selectedTheme = localStorage.getItem('selected-theme')
			const selectedIcon = localStorage.getItem('selctetd-icon')

			if (selectedTheme) {
				document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme')
				if (themeButton === 'uil-moon') {
					setThemeButton('uil-sun')
				}
				else {
					setThemeButton('uil-moon')
				}
			}

			const scrollHeader = () => {
				const nav = document.getElementById('header')
				if (window.scrollY >= 80) {
					nav.classList.add('scroll-header')
				}
				else {
					nav.classList.remove('scroll-header')
				}
			}
			window.addEventListener('scroll', scrollHeader)
		}
	}, [])

	return (
		<header className='header' id='header' ref={headerRef}>
			<nav className='nav container'>
				<a href='#' className='nav__logo'>
					Afif Ahmed
				</a>
				<div
					className={open ? `nav__menu show-menu` : `nav__menu`}
					id='nav-menu'
				>
					<ul className='nav__list grid'>
						<li className='nav__item'>
							<a href='#home' className='nav__link active-link' onClick={() => handleToggle()}>
								<UilEstate className='nav__icon' /> Home
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#about'
								className='nav__link'
								onClick={() => handleToggle()}
							>
								<UilUser className='nav__icon' /> About
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#skills'
								className='nav__link'
								onClick={() => handleToggle()}
							>
								<UilFile className='nav__icon' /> Skills
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#services'
								className='nav__link'
								onClick={() => handleToggle()}
							>
								<UilBag className='nav__icon' /> Services
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#portfolio'
								className='nav__link'
								onClick={() => handleToggle()}
							>
								<UilFileContract className='nav__icon' /> Portfolio
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#contact'
								className='nav__link'
								onClick={() => handleToggle()}
							>
								<UilMessage className='nav__icon' /> Contact
							</a>
						</li>
					</ul>
					<UilMultiply className='nav__close' onClick={() => handleToggle()} />
				</div>
				<div className='nav__btns'>
					<i className={`uil ` + themeButton + ` change-theme`} id="theme-button" onClick={() => handleThemeChange()}></i>
					<div
						className='nav__toggle'
						onClick={() => handleToggle()}
						id='nav-toggle'
					>
						<i className="uil uil-apps"></i>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
