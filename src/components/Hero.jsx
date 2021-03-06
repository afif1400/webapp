import React from "react";

const Hero = () => {
	return (
		<section className='home section' id='home'>
			<div className='home__container container grid'>
				<div className='home__content grid'>
					<div className='home__social'>
						<a
							href='https://github.com/afif1400'
							target='_blank'
							className='home__social-icon'
						>
							<i class='uil uil-github-alt'></i>
						</a>
						<a
							href='https://linkedin.com/in/afif-ahmed'
							target='_blank'
							className='home__social-icon'
						>
							<i class='uil uil-linkedin-alt'></i>
						</a>
						<a
							href='https://twitter.com/afif1400'
							target='_blank'
							className='home__social-icon'
						>
							<i class='uil uil-twitter-alt'></i>
						</a>
						<a
							href='https://blog.afifahmed.me'
							target='_blank'
							className='home__social-icon'
						>
							<i class='uil uil-brackets-curly'></i>
						</a>
					</div>
					<div className='home__img'>
						<svg
							className='home__blob'
							viewBox='0 0 200 187'
							xmlns='http://www.w3.org/2000/svg'
							xlink='http://www.w3.org/1999/xlink'
						>
							<mask id='mask0' mask-type='alpha'>
								<path
									d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
								/>
							</mask>
							<g mask='url(#mask0)'>
								<path
									d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
								/>
								<image
									x='12'
									y='34'
									className='home__blob-img'
									xlinkHref='https://res.cloudinary.com/charcha/image/upload/v1622814014/hero-profile_f6stc9.png'
								/>
							</g>
						</svg>
					</div>
					<div className='home__data'>
						<h1 className='home__title'>Hi, I'am Afif</h1>
						<h3 className='home__subtitle'>Full Stack Developer</h3>
						<p className='home__description'>
							I build great web experiences which are visually apealing using react and robust backend services.
						</p>
						<a href='#contact' className='button button--flex'>
							Contact Me
							<i className='uil uil-message button__icon' />
						</a>
					</div>
				</div>
				<div className='home__scroll'>
					<a href='#about' className='home__scroll-button button--flex'>
						<i className='uil uil-mouse-alt-2 home__scroll-mouse'></i>
						<span className='home__scroll-name'>Scroll down</span>
						<i className='uil uil-arrow-down home__scroll-arrow' />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
