import React, { useState } from "react";

const Qualifications = () => {
	const [education, setEducation] = useState(true)
	const [work, setWork] = useState(false)
	return (
		<section className='section qualification'>
			<h2 className='section__title'>Qualification</h2>
			<span className='section__subtitle'>My Journey</span>

			<div className='qualification__container container'>
				<div className='qualification__tabs'>
					<div className='qualification__button button--flex' onClick={() => {
						setEducation(true)
						setWork(false)
					}}>
						<i class='uil uil-graduation-cap qualification__icon'></i>
						Education
					</div>
					<div className='qualification__button button--flex' onClick={() => {
						setWork(true)
						setEducation(false)
					}}>
						<i class="uil uil-briefcase-alt qualification__icon"></i>
						Work
					</div>
				</div>
				<div className="qualification__sections">
					{/* Education */}
					<div className={education ? `qualification__content qualification__active` : `qualification__content`} data-content id="education">
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									Computer Science Engineering
								</h3>
								<span className="qualification__subtitle">
									PES University
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>
									2018 - Present
								</div>
							</div>
							<div>
								<span className="qualification__rounder">
								</span>
								<span className="qualification__line"></span>
							</div>
						</div>
						<div className="qualification__data">
							<div>

							</div>
							<div>
								<span className="qualification__rounder">

								</span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">
									High School
								</h3>
								<span className="qualification__subtitle">
									Pramana College
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>
									2016 - 2018
								</div>
							</div>
							<div>
							</div>
						</div>

					</div>
					<div className={work ? `qualification__content qualification__active` : `qualification__content`} data-content id="work ">
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									Full Stack Developer Intern
								</h3>
								<span className="qualification__subtitle">
									Bighaat
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>
									March 2021 - Present
								</div>
							</div>
							<>
								<div>
									<span className="qualification__rounder">
									</span>
									<span className="qualification__line"></span>
								</div>
							</>
						</div>
						<div className="qualification__data">
							<div>

							</div>
							<div>
								<span className="qualification__rounder">

								</span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">
									Full stack developer Intern
								</h3>
								<span className="qualification__subtitle">
									Bizcoveri
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>
									Nov 2020 - Feb 2021
								</div>
							</div>
							<div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section >
	);
};

export default Qualifications;
