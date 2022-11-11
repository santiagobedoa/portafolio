import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

	const [letterClass, setLetterClass] = useState('text-animate')
	const form = useRef()
	
	useEffect(() => {
		setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 3000)
	}, [])

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_c7amr1i',
				'template_iehtp39',
				form.current,
				'HioNuVHubeKYjkHo5'
			)
			.then(
				(result) => {
					alert('Message successfully sent!')
					window.location.reload(false)
				},
				() => {
					alert('Failed to send the message, please try again')
				}
			)
	}

	return (
		<>
			<div className='container contact-page'>
				<div className='text-zone'>
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
							idx={15}
						/>
					</h1>
					<p>
						I'm interested to work on a cool start-up, especially ambitious large projects. However, if you have other requests or questions, don't hesitate to contact me using the below form either.
					</p>
					<div className='contact-form'>
						<form ref={form} onSubmit={sendEmail}>
							<ul>
								<li className='half'>
									<input type='text' name='name' placeholder='Name' required />
								</li>
								<li className='half'>
									<input type='email' name='email' placeholder='Email' required />
								</li>
								<li>
									<input type='text' name='subject' placeholder='Subject' required />
								</li>
								<li>
									<textarea placeholder='Message' name='message' required></textarea>
								</li>
								<li>
									<input type='submit' className='flat-button' value='SEND' />
								</li>
							</ul>
						</form>
					</div>
				</div>
				<div className="info-map">
					Santiago Bedoya.
					<br />
					Medellin, Antioquia,
					<br />
					Colombia. <br />
					<br />
					<span>santiagobedoa@gmail.com</span>
				</div>
				<div className="map-wrap">
					<MapContainer center={[6.130931, -75.418538]} zoom={13}>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
						<Marker position={[6.130931, -75.418538]}>
							<Popup>Santiago lives here, come over for a cup of coffee :)</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
			<Loader type='pacman' />
		</>
	)
}

export default Contact;