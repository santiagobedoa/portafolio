import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
	<div className='nav-bar'>
		<Link className='logo' to='/portafolio'>
			<img src={LogoS} alt='logo' />
			<span className='sub-logo'>Santiago</span>
		</Link>
		<nav>
			<NavLink exact='true' activeclassname='active' to='/portafolio'>
				<FontAwesomeIcon icon={faHome} color='#4d4d4e' />
			</NavLink>
			<NavLink className='about-link' exact='true' activeclassname='active' to='/portafolio/about'>
				<FontAwesomeIcon icon={faUser} color='#4d4d4e' />
			</NavLink>
			<NavLink className='contact-link' exact='true' activeclassname='active' to='/portafolio/contact'>
				<FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
			</NavLink>
		</nav>
		<ul>
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
	</div>
)

export default Sidebar;