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
					<div className="divS">Home</div>
				</Flex>
				<Flex className="flexS">
					<Icon as={FiSearch} height="24px" width={"24px"}></Icon>
					<div className="divS">Search</div>
				</Flex>
				<Flex className="flexS">
					<Icon as={VscLibrary} height="24px" width={"24px"}></Icon>
					<div className="divS">Your Library</div>
				</Flex>
			</Box>

			<Box id="playlistS">
				<Flex className="flexS">
					<Icon
						as={AiOutlinePlusSquare}
						height="24px"
						width={"24px"}
					></Icon>
					<div className="divS">Create Playlist</div>
				</Flex>
				<Flex className="flexS">
					<Icon as={FcLike} height="24px" width={"24px"}></Icon>
					<div className="divS">Liked Songs</div>
				</Flex>
			</Box>
			<Box>
				<Box id="boxPlaylistS">
					<div className="divS">
						Playlistddddddddddddddddddddddddddd
					</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
					<div className="divS">Playlist</div>
				</Box>
			</Box>
		</Box>
	);
}
