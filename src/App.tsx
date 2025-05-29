import { Route, Routes } from "react-router"
import DummyPage from "./pages/DummyPage"
import NotFoundPage from "./pages/NotFoundPage"
import Navigation from "./components/Navigation"
import "./assets/styles/main.scss"

function App() {

	return (
		<>

			<Navigation />
			<h1>Product  Management</h1>
			<Routes>
				<Route path="/" element={<DummyPage />} />
				<Route path="/products" element={<DummyPage />} />
				<Route path="/products/:productId" element={<DummyPage />} />
				<Route path="/suppliers" element={<DummyPage />} />
				<Route path="/suppliers/:supplierID" element={<DummyPage />} />
				<Route path="/deliveries" element={<DummyPage />} />
				<Route path="/deliveries/:deliveryId" element={<DummyPage />} />
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
