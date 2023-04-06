import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../assets/img/Spotify2.png";
import {
	Box,
	Flex,
	Image,
	Icon,
	Center,
	Input,
	Checkbox,
	InputGroup,
	InputRightElement,
	Select,
	Radio,
	RadioGroup,
} from "@chakra-ui/react";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth_types } from "../redux/types";
import { TbAlertCircleFilled } from "react-icons/tb";

export default function RegisterPage() {
	const [seePassword, setSeePassword] = useState(false);
	const month = [
		{
			name: "January",
			number: 1,
		},
		{
			name: "February",
			number: 2,
		},
		{
			name: "March",
			number: 3,
		},
		{
			name: "April",
			number: 4,
		},
		{
			name: "May",
			number: 5,
		},
		{
			name: "June",
			number: 6,
		},
		{
			name: "July",
			number: 7,
		},
		{
			name: "August",
			number: 8,
		},
		{
			name: "September",
			number: 9,
		},
		{
			name: "October",
			number: 10,
		},
		{
			name: "November",
			number: 11,
		},
		{
			name: "December",
			number: 12,
		},
	];

	const [account, setAccount] = useState({ email: "", password: "" });

	function inputHandler(event) {
		const { value, id } = event.target;
		const tempAccount = { ...account };
		tempAccount[id] = value;
		setAccount(tempAccount);
	}

	return (
		<>
			<Center flexDir={"column"} w={"100vw"} gap={"40x"}>
				<Center
					width={"100%"}
					paddingTop={"25px"}
					pb={"12px"}
					color={"whiteAlpha.800"}
					gap={"20px"}
					paddingX={"24px"}
				>
					<Image src={logo} w={"88px"} h={"27px"} />
				</Center>

				<Center
					paddingX={"10px"}
					w={"100%"}
					maxW={"450px"}
					fontSize={"14px"}
					color={"white"}
					flexDir={"column"}
					gap="10px"
				>
					<Center
						w={"100%"}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						color={"black"}
						fontSize={"xl"}
					>
						Sign up for free to start listening.
					</Center>
					<Center
						cursor={"pointer"}
						w={"100%"}
						bgColor={"#1877F2"}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						border={"1px solid #A5A5A5"}
					>
						<Icon w={"20px"} h={"20px"} as={BsFacebook}></Icon>
						<Center color={"white"}>Sign up With Facebook</Center>
					</Center>

					<Center
						cursor={"pointer"}
						w={"100%"}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						color={"black"}
						border={"3px solid #535353"}
						bgColor={"white"}
					>
						<Icon w={"20px"} h={"20px"} as={FcGoogle}></Icon>
						<Center>Sign up With Google</Center>
					</Center>

					<Center
						w={"100%"}
						h={"48px"}
						color={"black"}
						gap={"12px"}
						fontWeight={"700"}
					>
						<Center w={"100%"}>
							<Box h="1px" w={"100%"} bgColor={"#7f7f7f"}></Box>
						</Center>
						or
						<Center w={"100%"}>
							<Box h="1px" w={"100%"} bgColor={"#7f7f7f"}></Box>
						</Center>
					</Center>

					<Flex
						w={"100%"}
						gap={"20px"}
						flexDir={"column"}
						color={"black"}
					>
						<Box
							w={"100%"}
							maxW={"450px"}
							flexDir={"column"}
							gap={"5px"}
						>
							<Box fontWeight={"700"}>What's your email?</Box>
							<Input
								onChange={inputHandler}
								id="email"
								w={"100%"}
								h={"48px"}
								placeholder="Enter your email"
							></Input>
							<Box color={"red"}>
								<Icon
									as={TbAlertCircleFilled}
									w="16px"
									h={"16px"}
								></Icon>
								You need enter your email
							</Box>
							<Box color={"#117a37"} textDecor={"underline"}>
								Use phone number instead
							</Box>
						</Box>

						<Box
							w={"100%"}
							maxW={"450px"}
							flexDir={"column"}
							gap={"5px"}
						>
							<Box fontWeight={"700"}>Confirm your email.</Box>
							<Input
								onChange={inputHandler}
								id="re-email"
								w={"100%"}
								h={"48px"}
								placeholder="Enter your email again."
							></Input>
							<Box color={"red"}>
								<Icon
									as={TbAlertCircleFilled}
									w="16px"
									h={"16px"}
								></Icon>
								You need confirm your email
							</Box>
						</Box>

						<Box
							w={"100%"}
							maxW={"450px"}
							flexDir={"column"}
							gap={"5px"}
						>
							<Box fontWeight={"700"}>Create password</Box>
							<InputGroup size={"md"}>
								<Input
									onChange={inputHandler}
									id="password"
									w={"100%"}
									h={"48px"}
									placeholder="Create password"
									type={seePassword ? "text" : "password"}
								></Input>
								<InputRightElement>
									<Icon
										as={
											seePassword
												? AiOutlineEye
												: AiOutlineEyeInvisible
										}
										color={"#A5A5A5"}
										w={"24px"}
										h={"24px"}
										cursor={"pointer"}
										onClick={() =>
											setSeePassword(!seePassword)
										}
									></Icon>
								</InputRightElement>
							</InputGroup>

							<Box color={"red"}>
								You need to enter a password
							</Box>
						</Box>
						<Box
							w={"100%"}
							maxW={"450px"}
							flexDir={"column"}
							gap={"5px"}
						>
							<Box fontWeight={"700"}>
								What should we call you?
							</Box>
							<Input
								onChange={inputHandler}
								id="profile"
								w={"100%"}
								h={"48px"}
								placeholder="Enter a profile name"
							></Input>
							<Box color={"red"}>
								<Icon
									as={TbAlertCircleFilled}
									w="16px"
									h={"16px"}
								></Icon>
								Enter a name to confirm your profile
							</Box>
						</Box>
						<Box
							w={"100%"}
							maxW={"450px"}
							flexDir={"column"}
							gap={"5px"}
						>
							<Box fontWeight={"700"}>
								What should we call you?
							</Box>
							<Flex>
								<Input
									onChange={inputHandler}
									id="day"
									maxW={"80px"}
									w={"100%"}
									placeholder="DD"
								></Input>
								{/* <Input
								onChange={inputHandler}
								id="profile"
								w={"40%"}
								h={"48px"}
								placeholder="Enter a profile name"
							></Input> */}
								<Select placeholder="Month">
									{month.map((val) => (
										<option value={val.number}>
											{val.name}
										</option>
									))}
								</Select>
								<Input
									onChange={inputHandler}
									id="year"
									maxW={"80px"}
									w={"100%"}
									placeholder="YYYY"
								></Input>
							</Flex>
							<Box color={"red"}>
								<Icon
									as={TbAlertCircleFilled}
									w="16px"
									h={"16px"}
								></Icon>
								Enter a valid day of the month
							</Box>
							<Box color={"red"}>
								<Icon
									as={TbAlertCircleFilled}
									w="16px"
									h={"16px"}
								></Icon>
								Select your birth of month
							</Box>
							<Box color={"red"}>
								<Icon
									as={TbAlertCircleFilled}
									w="16px"
									h={"16px"}
								></Icon>
								Enter a valid year
							</Box>
						</Box>
					</Flex>
					<Box
						w={"100%"}
						maxW={"450px"}
						flexDir={"column"}
						gap={"5px"}
					>
						<Box color={"black"} fontWeight={"700"}>
							What's your gender?
						</Box>
						{/* <Input
							onChange={inputHandler}
							id="profile"
							w={"100%"}
							h={"48px"}
							placeholder="Enter a profile name"
						></Input> */}
						<RadioGroup defaultValue="Male" color={"black"}>
							<Flex
								w={"100%"}
								flexWrap={"wrap"}
								justifyContent={"space-between"}
								rowGap={"10px"}
								// columnGap={"20px"}
							>
								<Radio
									colorScheme="green"
									value="Male"
									w={"100px"}
								>
									Male
								</Radio>

								<Radio
									colorScheme="green"
									value="Female"
									w={"100px"}
								>
									Female
								</Radio>

								<Radio
									colorScheme="green"
									value="Non-binary"
									w={"120px"}
								>
									Non binary
								</Radio>

								<Radio
									colorScheme="green"
									value="Other"
									w={"100px"}
								>
									Other
								</Radio>

								<Radio
									colorScheme="green"
									value="Prefer-not-to-say"
									w={"100%"}
									textColor={"black"}
								>
									Prefer not to say
								</Radio>
							</Flex>
						</RadioGroup>
						{/* <Box color={"red"}>
							<Icon
								as={TbAlertCircleFilled}
								w="16px"
								h={"16px"}
							></Icon>
							Enter your gender
						</Box> */}
					</Box>

					<Flex
						pt={"10px"}
						pb={"8px"}
						w={"100%"}
						h={"40px"}
						fontSize={"14px"}
						color={"black"}
						alignItems={"flex-start"}
					>
						<Checkbox colorScheme="green" h={"100%"}></Checkbox>
						<Box h={"100%"} paddingX={"12px"}>
							I would prefer not to receive marketing messages
							from Spotify
						</Box>
					</Flex>
					<Flex
						pt={"10px"}
						pb={"8px"}
						w={"100%"}
						h={"60px"}
						fontSize={"14px"}
						color={"black"}
						alignItems={"flex-start"}
					>
						<Checkbox colorScheme="green" h={"100%"}></Checkbox>
						<Box h={"100%"} paddingX={"12px"}>
							Share my registration data with Spotify's content
							providers for marketing purposes.
						</Box>
					</Flex>
					<Center flexDir={"column"} gap={"10px"} color={"black"}>
						<Center fontSize={"11px"} gap={"11px"}>
							By clicking on sign-up, you agree to Spotify's
							<Flex color={"green"} textDecor={"underline"}>
								Terms and Conditions of Use.
							</Flex>
						</Center>
						<Center fontSize={"11px"} gap={"11px"}>
							By clicking on sign-up, you agree to the
							<Flex color={"green"} textDecor={"underline"}>
								Spotify Privacy Policy.
							</Flex>
						</Center>
					</Center>

					<Center
						cursor={"pointer"}
						borderRadius={"25"}
						fontWeight={"600"}
						bgColor={"#1ED760"}
						h={"48px"}
						w={"121px"}
						color={"black"}
					>
						Sign up
					</Center>
					<Center fontSize={"11px"} gap={"11px"} color={"black"}>
						Have an account?
						<Flex color={"green"} textDecor={"underline"}>
							Log in.
						</Flex>
					</Center>
				</Center>
			</Center>
		</>
	);
}
