import { Box, Flex, Icon } from "@chakra-ui/react";
import "../css/spotify.css";
import SpotifyLogo from "../assets/img/Spotify.png";
import { RiHomeFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export default function Sidebar() {
	return (
		<Box id="boxS">
			<Flex id="spotifyS">
				<img src={SpotifyLogo} className="logoS" alt="" />
			</Flex>

			<Box id="homeS">
				<Flex className="flexS">
					<Icon as={RiHomeFill} height="24px" width="24px"></Icon>
					<div>Home</div>
				</Flex>
				<Flex className="flexS">
					<Icon as={FiSearch} height="24px" width={"24px"}></Icon>
					<div>Search</div>
				</Flex>
				<Flex className="flexS">
					<Icon as={VscLibrary} height="24px" width={"24px"}></Icon>
					<div>Your Library</div>
				</Flex>
			</Box>

			<Box id="playlistS">
				<Flex className="flexS">
					<Icon
						as={AiOutlinePlusSquare}
						height="24px"
						width={"24px"}
					></Icon>
					<div>Create Playlist</div>
				</Flex>
				<Flex className="flexS">
					<Icon as={FcLike} height="24px" width={"24px"}></Icon>
					<div>Liked Songs</div>
				</Flex>
			</Box>
			<Box paddingBottom={"90px"}>
				<Box id="boxPlaylistS">
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
					<div>Playlist</div>
				</Box>
			</Box>
		</Box>
	);
}
