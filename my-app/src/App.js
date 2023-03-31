import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";

import Homepage from "./pages/HomePage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/home" element={<Homepage />}></Route>
			</Routes>
		</>
	);
}

export default App;
