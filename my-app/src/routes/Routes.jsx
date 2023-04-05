import { Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedPage from "./ProtectedPage";

const routes = [
	<Route
		path="/home"
		element={
			<ProtectedPage guestOnly={false} needLogin={true}>
				<Homepage />
			</ProtectedPage>
		}
	></Route>,
	<Route
		path="/login"
		element={
			<ProtectedPage guestOnly={true} needLogin={false}>
				<LoginPage />
			</ProtectedPage>
		}
	></Route>,
];

export default routes;
