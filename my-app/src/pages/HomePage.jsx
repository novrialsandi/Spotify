import Content from "../component/content";
import Navbar from "../component/navbar";
import Playbar from "../component/playbar";
import Sidebar from "../component/sidebar";
import Bg from "../component/bg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Spinner } from "@chakra-ui/react";
import axios from "axios";

export default function Homepage(props) {
	const [loading, setLoading] = useState(true);
	const [home_playlist, setHome_playlist] = useState([]);

	let nav = useNavigate();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		// masuk sini pada saat load page

		if (!user?.email) {
			return nav("/login");
		}
		setTimeout(() => setLoading(false), 1000);
	}, []);

	const [playlist, setPlaylist] = useState([]);

	async function fetchData() {
		await axios
			.get("http://localhost:2000/music")
			.then((res) => setPlaylist(res.data));
		await axios
			.get("http://localhost:2000/playlist")
			.then((res) => setHome_playlist(res.data));
		// await axios.get("http://localhost:2000/playlist")
	}

	useEffect(() => {
		fetchData();
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
					<Content data={home_playlist} setPlaylist={setPlaylist} />
					<Navbar />
					<Playbar key="playbar" playlist={playlist} />
					<Sidebar playlist={playlist} />
				</>
			)}
		</>
	);
}
