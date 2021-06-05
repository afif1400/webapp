import React, { useState } from "react";

const Skills = () => {
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);

	return (
		<section className='skills section' id='skills'>
			<h2 className='section__title'>Skills</h2>
			<span className='section__subtitle'>My technical level</span>

			<div className='skills__container container grid'>
				<div>
					<div
						className={
							open1
								? `skills__content skills__open`
								: `skills__content skills__close`
						}
					>
						<div
							className='skills__header'
							onClick={() => {
								setOpen1(!open1);
							}}
						>
							<i class='uil uil-react skills__icon'></i>
							<div>
								<h1 className='skills__title'>Frontend Developer</h1>
								<span className='skills__subtitle'>
									My frontend development skills
								</span>
							</div>
							<i className='uil uil-angle-down skills__arrow'></i>
						</div>
						<div className='skills__list grid'>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>HTML & CSS</h3>
									<span className='skills__number'>90%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__html'></span>
								</div>
							</div>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>React</h3>
									<span className='skills__number'>90%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__react'></span>
								</div>
							</div>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>Gatsby.JS</h3>
									<span className='skills__number'>85%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__gatsby'></span>
								</div>
							</div>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>Next.JS</h3>
									<span className='skills__number'>75%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__next'></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div
						className={
							open2
								? `skills__content skills__open`
								: `skills__content skills__close`
						}
					>
						<div
							className='skills__header'
							onClick={() => {
								setOpen2(!open2);
							}}
						>
							<i class='uil uil-server skills__icon'></i>
							<div>
								<h1 className='skills__title'>Backend Developer</h1>
								<span className='skills__subtitle'>
									My backend development skills
								</span>
							</div>
							<i className='uil uil-angle-down skills__arrow'></i>
						</div>
						<div className='skills__list grid'>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>Node JS</h3>
									<span className='skills__number'>80%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__node'></span>
								</div>
							</div>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>Express JS</h3>
									<span className='skills__number'>85%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__express'></span>
								</div>
							</div>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>Serverless/AWS Lambda</h3>
									<span className='skills__number'>75%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__lambda'></span>
								</div>
							</div>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>GO</h3>
									<span className='skills__number'>65%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__go'></span>
								</div>
							</div>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>Django</h3>
									<span className='skills__number'>70%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__django'></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div
						className={
							open3
								? `skills__content skills__open`
								: `skills__content skills__close`
						}
					>
						<div
							className='skills__header'
							onClick={() => {
								setOpen3(!open3);
							}}
						>
							<i class='uil uil-cloud skills__icon'></i>
							<div>
								<h1 className='skills__title'>Devops & Cloud Computing</h1>
								<span className='skills__subtitle'>
									My cloud and devops skills
								</span>
							</div>
							<i className='uil uil-angle-down skills__arrow'></i>
						</div>
						<div className='skills__list grid'>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>Docker</h3>
									<span className='skills__number'>90%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__docker'></span>
								</div>
							</div>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>Kubernetes</h3>
									<span className='skills__number'>75%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__kubernetes'></span>
								</div>
							</div>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>CI/CD</h3>
									<span className='skills__number'>80%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__ci'></span>
								</div>
							</div>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>AWS</h3>
									<span className='skills__number'>70%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__aws'></span>
								</div>
							</div>
							<div className='skills__data'>
								<div className='skills__titles'>
									<h3 className='skills__name'>Ansible</h3>
									<span className='skills__number'>70%</span>
								</div>
								<div className='skills__bar'>
									<span className='skills__percentage skills__ansible'></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
