import React from "react";

const Qualifications = () => {
	return (
		<section className='section qualification'>
			<h2 className='section__title'>Qualification</h2>
			<span className='section__subtitle'>My Journey</span>

			<div className='qual__container container'>
				<div className='qual__tabs'>
					<div className='qual__button button--flex'>
						<i class='uil uil-graduation-cap qual__icon'></i>
						Education
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualifications;
