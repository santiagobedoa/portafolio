import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import projectsData from '../../data/projects.json';
import shell from '../../projects/shell/shell.png';
import blog from '../../projects/blog/blog.png';
import portafolio from '../../projects/portafolio/portafolio.png';
import airbnb from '../../projects/airbnb/airbnb.png';

const hash_map = {
	'shell' : shell,
	'blog' : blog,
	'portafolio' : portafolio,
	'airbnb' : airbnb
}

const Projects = () => {

	const [letterClass, setLetterClass] = useState('text-animate');

	useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3000);
		return () => {
			clearTimeout(timer)
		}
	});

	const renderPortfolio = (data) => {
		return (
			<div className='images-container'>
				{
					data.map((project, idx) => {
						return (
							<div className='image-box' key={idx}>
								<img 
									className='project-image'
									src={hash_map[project.name]}
									alt='project'
								/>
								<div className='image-content'>
									<p className='image-title'>{project.title}</p>
									<h4 className='image-description'>{project.description}</h4>
									<button
										className='image-button'
										onClick={() => window.open(project.url)}
									>View</button>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}

	return (
		<>
			<div className='container projects-page'>
				<div className='text-zone'>
					<h1 className='page-title'>
						<AnimatedLetters
							idx={15}
							strArray={'Portfolio'.split('')}
							letterClass={letterClass}
						/>
					</h1>
					<div>
						{renderPortfolio(projectsData.projects)}
					</div>
				</div>
			</div>
			<Loader type='pacman' />
		</>
	)
}

export default Projects;