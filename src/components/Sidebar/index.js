import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBars, faClose, faFile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';

const Sidebar = () => {

	const [showNav, setShowNav] = useState(false);

	return (
		<div className='nav-bar'>
			<Link className='logo' to='/'>
				<img src={LogoS} alt='logo' />
				<span className='sub-logo'>Santiago</span>
			</Link>
			<nav className={showNav ? 'mobile-show' : ''}>
				<NavLink 
					onClick={() => setShowNav(false)}
					exact='true' 
					activeclassname='active' 
					to='/'
				>
					<FontAwesomeIcon icon={faHome} color='#4d4d4e' />
				</NavLink>
				<NavLink 
					onClick={() => setShowNav(false)}
					className='about-link' 
					exact='true' 
					activeclassname='active' 
					to='/about'
				>
					<FontAwesomeIcon icon={faUser} color='#4d4d4e' />
				</NavLink>
				<NavLink 
					onClick={() => setShowNav(false)}
					className='contact-link' 
					exact='true' 
					activeclassname='active' 
					to='/contact'
				>
					<FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
				</NavLink>
				<FontAwesomeIcon 
					onClick={() => setShowNav(false)}
					icon={faClose}
					color='#ffd700'
					size='3x'
					className='close-icon'
				/>
			</nav>
			<ul>
				<li>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://drive.google.com/file/d/1nGv2EiHdH6kn3lj1LwsFf_H6IYY-KnDp/view?usp=share_link'
					>
						<FontAwesomeIcon icon={faFile} color='#4d4d4e' fontSize='1.5em' />
					</a>
				</li>
				<li>
					<a 
						target='_blank' 
						rel='noreferrer' 
						href='https://www.linkedin.com/in/santiagobedoa/'
					>
						<FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' fontSize='1.5em'/>
					</a>
				</li>
				<li>
					<a 
						target='_blank' 
						rel='noreferrer' 
						href='https://github.com/santiagobedoa'
					>
						<FontAwesomeIcon icon={faGithub} color='#4d4d4e' fontSize='1.5em'/>
					</a>
				</li>
				<li>
					<a 
						target='_blank' 
						rel='noreferrer' 
						href='https://medium.com/@santiagobedoa'
					>
						<FontAwesomeIcon icon={faMedium} color='#4d4d4e' fontSize='1.5em'/>
					</a>
				</li>
			</ul>
			<FontAwesomeIcon 
				onClick={() => setShowNav(true)}
				icon={faBars}
				color='#ffd700'
				size='3x'
				className='hamburguer-icon'
			/>
		</div>
	)
}

export default Sidebar;