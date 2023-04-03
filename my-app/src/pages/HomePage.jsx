import Content from "../component/content";
import Navbar from "../component/navbar";
import Playbar from "../component/playbar";
import Sidebar from "../component/sidebar";
import Bg from "../component/bg";

export default function Homepage() {
	return (
		<>
			<Bg />
			<Content />
			<Navbar />
			<Playbar />
			<Sidebar />
		</>
	);
}
