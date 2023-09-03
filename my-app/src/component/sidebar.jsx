import {
	Box,
	Flex,
	Icon,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
import "../css/spotify.css";
import SpotifyLogo from "../assets/img/Spotify.png";
import { RiHomeFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { CreatePlaylist } from "./Modal";

export default function Sidebar({ playlist }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box bgColor={"black"} id="boxS">
			<Flex id="spotifyS">
				<img src={SpotifyLogo} className="logoS" alt="" />
			</Flex>

			<Box bgColor={"black"} id="homeS">
				<Flex bgColor={"black"} className="flexS">
					<Icon as={RiHomeFill} height="24px" width="24px"></Icon>Home
				</Flex>
				<Flex className="flexS">
					<Icon as={FiSearch} height="24px" width={"24px"}></Icon>
					Search
				</Flex>
				<Flex className="flexS">
					<Icon as={VscLibrary} height="24px" width={"24px"}></Icon>
					Your Library
				</Flex>
			</Box>

			<Box id="playlistS">
				<Flex className="flexS" onClick={onOpen} cursor={"pointer"}>
					<Modal isOpen={isOpen} onClose={onClose}>
						<ModalOverlay />
						<ModalContent>
							<CreatePlaylist onClose={onClose} />
						</ModalContent>
					</Modal>
					<Icon as={AiOutlinePlusSquare} height="24px" width={"24px"}></Icon>
					Create Playlist
				</Flex>
				<Flex className="flexS">
					<Icon as={FcLike} height="24px" width={"24px"}></Icon>Liked Songs
				</Flex>
			</Box>
			<Box>
				<Box id="boxPlaylistS">
					{playlist.map((val) => (
						<div>{val.title}</div>
					))}
				</Box>
			</Box>
		</Box>
	);
}
