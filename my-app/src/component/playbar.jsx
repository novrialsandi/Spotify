import "../css/spotify.css";
import {
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	SliderMark,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faLaptop,
	faRepeat,
	faBackwardStep,
	faCirclePlay,
	faForwardStep,
	faShuffle,
	faMicrophone,
	faBars,
	faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { MdSpeakerGroup } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";

export default function Playbar(props) {
	const [audio, setAudio] = useState({});
	const [duration, setDuration] = useState(0);
	const [counter, setCounter] = useState(0);
	const [pause, setPause] = useState(true);
	const [currentTime, setCurrentTime] = useState(0);

	function changePlaylist() {
		setTimeout(() => setCurrentTime(audio?.currentTime), 500);

		if (audio.src) {
			setCounter(0);
			changeSong(0);
		} else {
			soundTrack();
		}
	}

	useEffect(() => {
		changePlaylist();
	}, [props.playlist]);

	useEffect(() => {
		updateTime();
	}, [currentTime]);

	async function updateTime() {
		if (currentTime === audio.duration && audio.duration) {
			setCounter(counter + 1);
			return await changeSong(counter + 1);
		}
		const promise = new Promise((resolve) => {
			setTimeout(() => {
				if (!pause) {
					resolve(setCurrentTime(audio.currentTime));
				}
			}, 500);
		});
		return await promise;
	}

	function soundTrack() {
		if (props.playlist?.length) {
			const tempAudio = new Audio(
				require("../assets/audio/" + props.playlist[0].src)
			);
			tempAudio.addEventListener("loadedmetadata", function () {
				setDuration(tempAudio.duration);
				console.log(tempAudio.duration);
			});

			setAudio(tempAudio);
		}
	}

	function play(status) {
		setPause(status);
		if (!status) {
			audio.play();
			setTimeout(() => setCurrentTime(audio.currentTime), 500);
			return;
		}
		audio.pause();
	}

	async function changeSong(track) {
		if (track > props.playlist.length - 1 || track < 0) {
			track = 0;
		}
		setCounter(track);
		audio.src = require("../assets/audio/" + props.playlist[track].src);

		return audio.play().finally(() => {
			setPause(false);
			updateTime();
		});
	}

	return (
		<div className="playbar1_Mikhael">
			<div className="pembungkus_Mikhael">
				<div className="pembungkusBungkus_Mikhael">
					<div className="kiri_Mikhael">
						<div className="gambar_Mikhael">
							<img
								src={
									props.playlist?.length
										? props.playlist[counter]?.img
										: null
								}
								alt=""
								srcset=""
							/>
						</div>
						<div className="judullagu_Mikhael">
							<div className="judullagu2_Mikhael">
								<p>
									{props.playlist?.length
										? props.playlist[counter]?.title
										: null}
								</p>
								<p>
									{props.playlist?.length
										? props.playlist[counter]?.singer
										: null}
								</p>
							</div>
							{/* logo */}
							<div className="logo_Mikhael">
								<FontAwesomeIcon
									icon={faHeart}
									style={{ color: "#ffffff" }}
								/>
								<FontAwesomeIcon
									icon={faLaptop}
									style={{ color: "#ffffff" }}
								/>
							</div>
						</div>
					</div>

					{/* tengah */}
					<div className="tengah_Mikhael">
						<div className="tombolAtas_Mikhael">
							<div className="ta_Mikhael">
								<div>
									<FontAwesomeIcon
										icon={faShuffle}
										style={{ color: "#ffffff" }}
									/>
								</div>
								<div>
									<FontAwesomeIcon
										icon={faBackwardStep}
										style={{ color: "#ffffff" }}
										onClick={async () => {
											setCounter(counter - 1);
											await changeSong(counter - 1);
										}}
										cursor={"pointer"}
									/>
								</div>
								<div className="playButton_Mikhael">
									<FontAwesomeIcon
										icon={
											audio.paused
												? faCirclePlay
												: faCirclePause
										}
										style={{
											"--fa-primary-color": "#000714",
											"--fa-secondary-color": "#ffffff",
										}}
										onClick={() => play(!pause)}
										cursor={"pointer"}
									/>
								</div>
								<div>
									<FontAwesomeIcon
										icon={faForwardStep}
										style={{ color: "#ffffff" }}
										onClick={async () => {
											setCounter(counter + 1);
											await changeSong(counter + 1);
										}}
										cursor={"pointer"}
									/>
								</div>
								<div>
									<FontAwesomeIcon icon={faRepeat} />
								</div>
							</div>
						</div>
						<div className="tombolBawah_Mikhael">
							<div className="slider_Mikhael">
								<p>
									{Math.floor(audio.currentTime / 60)}:
									{Math.floor(audio.currentTime % 60) > 9
										? Math.floor(audio.currentTime % 60)
										: "0" +
										  Math.floor(audio.currentTime % 60)}
								</p>

								<Slider
									aria-label="slider-ex-1"
									defaultValue={0}
									width={430}
									value={
										Math.round(audio?.currentTime * 100) /
										audio?.duration
									}
									onChange={(val) => {
										let changeDur = val / 100;
										if (audio.duration) {
											changeDur *= audio.duration;
										}
										audio.currentTime = changeDur;
										setCurrentTime(audio?.currentTime);
									}}
									// onChange={(val) => {
									// 	let changeDur = val / 100;
									// 	if (audio.duration) {
									// 		changeDur *= audio.duration;
									// 	}
									// 	audio.currentTime = changeDur;
									// 	setCurrentTime(audio?.currentTime);
									// }}
								>
									<SliderTrack>
										<SliderFilledTrack />
									</SliderTrack>
									<SliderThumb />
								</Slider>
								<p>
									{Math.floor(duration / 60)}:
									{Math.floor(duration % 60) > 9
										? Math.floor(duration % 60)
										: "0" + Math.floor(duration % 60)}
								</p>
							</div>
						</div>
					</div>
					{/* kanan */}
					<div className="kananSpot_Mikhael">
						<div className="isiKanan_Mikhael">
							<FontAwesomeIcon
								icon={faMicrophone}
								style={{ color: "#ffffff" }}
							/>
							<FontAwesomeIcon
								icon={faBars}
								style={{ color: "#ffffff" }}
							/>
							<MdSpeakerGroup></MdSpeakerGroup>
							<HiSpeakerWave></HiSpeakerWave>

							<Slider
								aria-label="slider-ex-1"
								width={100}
								defaultValue={audio?.volume * 100}
								onChange={(vol) => (audio.volume = vol / 100)}
							>
								<SliderTrack>
									<SliderFilledTrack />
								</SliderTrack>
								<SliderThumb />
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

//mikhael
