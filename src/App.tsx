import { Route, Routes } from "react-router"
import DummyPage from "./pages/DummyPage"
import NotFoundPage from "./pages/NotFoundPage"
import Navigation from "./components/Navigation"
import "./assets/styles/main.scss"
import { useState } from "react"
import UnauthorizedPage from "./pages/UnauthorizedPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import IndexPage from "./pages/IndexPage"
import FooterComp from "./components/FooterComp"

function App() {
	const [isLoggedIn, setIsloggedIn] = useState<string | false>("false");
	const handleLogin = (data: string) => {
		if (data === "false") {
			setIsloggedIn(false)
			return
		} else {
			setIsloggedIn(data);
		}

	}
	return (
		<>
			<Navigation />

			<Routes>
				<Route path="/" element={isLoggedIn ? <IndexPage /> : <LoginPage loggedIn={(userName) => handleLogin(userName)} />} />
				<Route path="/products" element={isLoggedIn ? <DummyPage /> : <UnauthorizedPage />} />
				<Route path="/products/:productId" element={isLoggedIn ? <DummyPage /> : <UnauthorizedPage />} />
				<Route path="/suppliers" element={isLoggedIn ? <DummyPage /> : <UnauthorizedPage />} />
				<Route path="/suppliers/:supplierID" element={isLoggedIn ? <DummyPage /> : <UnauthorizedPage />} />
				<Route path="/deliveries" element={isLoggedIn ? <DummyPage /> : <UnauthorizedPage />} />
				<Route path="/deliveries/:deliveryId" element={isLoggedIn ? <DummyPage /> : <UnauthorizedPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage loggedIn={(userName) => handleLogin(userName)} />} />
				<Route path="/*" element={<NotFoundPage />} />

			</Routes>
			<FooterComp />
		</>
	)
}

export default App
