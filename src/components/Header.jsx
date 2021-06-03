import React, { useState } from "react";
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

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<header className='header' id='header'>
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
							<a href='#' className='nav__link' onClick={() => handleToggle()}>
								<UilEstate className='nav__icon' /> Home
							</a>
						</li>
						<li className='nav__item'>
							<a
								href='#About'
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
					<div
						className='nav__toggle'
						onClick={() => handleToggle()}
						id='nav-toggle'
					>
						<UilApps />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
