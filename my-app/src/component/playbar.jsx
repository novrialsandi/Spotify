import "../css/spotify.css";
import gambar from "../asset/tulus.jpg";
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
} from "@fortawesome/free-solid-svg-icons";
import { MdSpeakerGroup } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";

export default function Playbar(props) {
	const [audio, setAudio] = useState({});
	useEffect(() => {
		console.log(props.playlist);
		soundTrack();
	}, [props.playlist]);

	function soundTrack() {
		if (props.playlist?.length) {
			const tempAudio = new Audio(
				require("../assets/audio/" + props.playlist[0].src)
			);
			// tempAudio.addEventListener("loadedmetadata", function () {
			// 	SVGAnimatedEnumeration(tempAudio.duration);
			// });
			setAudio(tempAudio);
		}
	}

	return (
		<div className="playbar1_Mikhael">
			<div className="pembungkus_Mikhael">
				<div className="pembungkusBungkus_Mikhael">
					<div className="kiri_Mikhael">
						<div className="gambar_Mikhael">
							<img src={gambar} alt="" srcset="" />
						</div>
						<div className="judullagu_Mikhael">
							<div className="judullagu2_Mikhael">
								<p>Monokrom</p>
								<p>Tulus</p>
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
									/>
								</div>
								<div className="playButton_Mikhael">
									<FontAwesomeIcon
										icon={faCirclePlay}
										style={{
											"--fa-primary-color": "#000714",
											"--fa-secondary-color": "#ffffff",
										}}
										// onClick={()=> play(!pause)}
										onClick={() => audio?.play()}
										cursor={"pointer"}
									/>
								</div>
								<div>
									<FontAwesomeIcon
										icon={faForwardStep}
										style={{ color: "#ffffff" }}
									/>
								</div>
								<div>
									<FontAwesomeIcon icon={faRepeat} />
								</div>
							</div>
						</div>
						<div className="tombolBawah_Mikhael">
							<div className="slider_Mikhael">
								<p>01:23</p>

								<Slider
									aria-label="slider-ex-1"
									defaultValue={10}
									width={430}
								>
									<SliderTrack>
										<SliderFilledTrack />
									</SliderTrack>
									<SliderThumb />
								</Slider>
								<p>04:20</p>
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
								defaultValue={10}
								width={100}
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
