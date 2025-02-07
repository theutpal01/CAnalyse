import Hero from '../components/Landing/Home/Hero'
import Navbar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer'
import Features from './Features'
import About from './About'
import Contact from './Contact'

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Features />
			<About />
			<Contact />
			<Footer />
		</div>
	)
}

export default Home