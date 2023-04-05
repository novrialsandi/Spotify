import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";
import Loginpage from "./pages/LoginPage";
import Homepage from "./pages/HomePage";
import routes from "./routes/Routes";

function App() {
	return (
		<>
			<Routes>{routes.map((val) => val)}</Routes>
		</>
	);
}

export default App;
