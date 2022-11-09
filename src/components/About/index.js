import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState, useEffect } from 'react';
import {
	faDocker, faGitAlt, faJsSquare, faNodeJs, faPython, faReact
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';

const About = () => {

	const [letterClass, setLetterClass] = useState('text-animate');

	useEffect(() => {
		setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 3000)
	}, [])

	return (
		<>
			<div className='container about-page'>
				<div className='text-zone'>
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
							idx={15}
						/>
					</h1>
					<p>
						I'm a very ambitious back-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
					</p>
					<p>
						I'm quietly confident, naturally curious, and continually improving my chops to always offer the best of me.
					</p>
					<p>
						I have been trained in different programming languages such as C, Python, and Javascript, gaining excellent problem-solving skills. Besides, I have knowledge in the most important areas of a business, such as marketing, finance, economics, business intelligence, and strategy, and a specialization in innovation.
					</p>
				</div>
				<div className='stage-cube-cont'>
					<div className='cubespinner'>
						<div className='face1'>
							<FontAwesomeIcon icon={faPython} color='#306998' />
						</div>
						<div className='face2'>
							<FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
						</div>
						<div className='face3'>
							<FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
						</div>
						<div className='face4'>
							<FontAwesomeIcon icon={faReact} color='#5ED4F4' />
						</div>
						<div className='face5'>
							<FontAwesomeIcon icon={faDocker} color='#0DB7ED' />
						</div>
						<div className='face6'>
							<FontAwesomeIcon icon={faNodeJs} color='#3C873A' />
						</div>
					</div>
				</div>
			</div>
			<Loader type='pacman' />
		</>
	)
}

export default About;