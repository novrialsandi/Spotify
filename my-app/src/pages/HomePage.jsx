import Content from "../component/content";
import Navbar from "../component/navbar";
import Playbar from "../component/playbar";
import Sidebar from "../component/sidebar";
import Bg from "../component/bg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Spinner } from "@chakra-ui/react";

export default function Homepage(props) {
	const [loading, setLoading] = useState(true);

	let nav = useNavigate();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		// masuk sini pada saat load page

		if (!user?.email) {
			return nav("/login");
		}
		setTimeout(() => setLoading(false), 1000);
	}, []);

	return (
		<>
			{loading ? (
				<Center w={"100vw"} h={"100vh"}>
					<Spinner size={"xl"} />
				</Center>
			) : (
				<>
					<Bg />
					<Content />
					<Navbar />
					<Playbar />
					<Sidebar />
				</>
			)}
		</>
	);
}
