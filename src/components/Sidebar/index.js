import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
	<div className='nav-bar'>
		<Link className='logo' to='/'>
			<img src={LogoS} alt='logo' />
			<img className='sub-logo' src={LogoSubtitle} alt='santiago' />
		</Link>
		<nav>
			<NavLink exact='true' activeclassname='active' to='/'>
				<FontAwesomeIcon icon={faHome} color='#4d4d4e' />
			</NavLink>
			<NavLink className='about-link' exact='true' activeclassname='active' to='/about'>
				<FontAwesomeIcon icon={faUser} color='#4d4d4e' />
			</NavLink>
			<NavLink className='contact-link' exact='true' activeclassname='active' to='/contact'>
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