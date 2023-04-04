import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";
import Loginpage from "./pages/LoginPage";
import Homepage from "./pages/HomePage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/home" element={<Homepage user="sand" />}></Route>
				<Route path="/login" element={<Loginpage />}></Route>
			</Routes>
		</>
	);
}

export default App;
