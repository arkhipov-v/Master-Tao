import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import Contacts from "./components/pages/Contacts"
import Header from "./components/layout/Header"
import UI from "./components/pages/UI"
import Services from "./components/pages/Services"
import "normalize.css"

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Services" element={<Services />} />
				<Route path="/Contacts" element={<Contacts />} />
				<Route path="/UI" element={<UI />} />
			</Routes>
		</Router>
	)
}

export default App
