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
} from "@chakra-ui/react";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
	const nav = useNavigate();
	const [account, setAccount] = useState({ email: "", password: "" });

	function inputHandler(event) {
		const { value, id } = event.target;
		const tempAccount = { ...account };
		tempAccount[id] = value;
		setAccount(tempAccount);
	}

	const [seePassword, setSeePassword] = useState(false);

	function login() {
		nav("/home");
	}

	return (
		<>
			<Center flexDir={"column"} w={"100vw"} gap={"40x"}>
				<Center
					width={"100%"}
					paddingTop={"25px"}
					pb={"12px"}
					borderBottom={"1px solid #D9DaDC"}
					color={"whiteAlpha.800"}
					gap={"20px"}
				>
					<Image src={logo} w={"143px"} h={"44px"} />
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
						<Center color={"white"}>CONTINUE WITH FACEBOOK</Center>
					</Center>

					<Center
						cursor={"pointer"}
						w={"100%"}
						bgColor={"black "}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						border={"1px solid #A5A5A5"}
					>
						<Icon w={"20px"} h={"20px"} as={BsApple}></Icon>
						<Center color={"white"}>CONTINUE WITH FACEBOOK</Center>
					</Center>

					<Center
						cursor={"pointer"}
						w={"100%"}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						color={"blackAlpha.500"}
						border={"1px solid #A5A5A5"}
						bgColor={"white"}
					>
						<Icon w={"20px"} h={"20px"} as={FcGoogle}></Icon>
						<Center>CONTINUE WITH GOOGLE</Center>
					</Center>

					<Center
						cursor={"pointer"}
						w={"100%"}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						color={"blackAlpha.500"}
						border={"1px solid #A5A5A5"}
						bgColor={"white"}
					>
						<Center>CONTINUE WITH PHONE NUMBER</Center>
					</Center>

					<Center
						w={"100%"}
						h={"48px"}
						color={"black"}
						gap={"12px"}
						fontWeight={"700"}
					>
						<Center w={"100%"}>
							<Box h="1px" w={"100%"} bgColor={"#D9DADC"}></Box>
						</Center>
						OR
						<Center w={"100%"}>
							<Box h="1px" w={"100%"} bgColor={"#D9DADC"}></Box>
						</Center>
					</Center>

					<Flex
						w={"100%"}
						pt={"20px"}
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
							<Box fontWeight={"700"}>
								Email address or username
							</Box>
							<Input
								onChange={inputHandler}
								id="email"
								w={"100%"}
								h={"48px"}
								placeholder="Email addrress or username"
							></Input>
						</Box>

						<Box
							w={"100%"}
							maxW={"450px"}
							flexDir={"column"}
							gap={"5px"}
						>
							<Box fontWeight={"700"}>Password</Box>
							<InputGroup size={"md"}>
								<Input
									onChange={inputHandler}
									id="password"
									w={"100%"}
									h={"48px"}
									placeholder="Password"
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
						</Box>

						<Box w={"100%"} flexDir={"column"} gap={"5px"}>
							<Box
								cursor={"pointer"}
								textDecoration={"underline"}
								fontWeight={"700"}
							>
								Forgot password
							</Box>
						</Box>
					</Flex>
					<Flex
						width={"100%"}
						flexDir={"row"}
						fontWeight={"600"}
						gap={"5px"}
						justifyContent={"space-between"}
						color={"black"}
					>
						<Flex alignItems={"flex-start"}>
							<Checkbox colorScheme="green" />
							Remember me
						</Flex>
						<Center
							cursor={"pointer"}
							borderRadius={"25"}
							fontWeight={"600"}
							bgColor={"#1ED760"}
							h={"48px"}
							w={"121px"}
							onClick={login}
						>
							LOG IN
						</Center>
					</Flex>
					<Center w={"100%"}>
						<Box h="1px" w={"100%"} bgColor={"#D9DADC"}></Box>
					</Center>

					<Center
						w={"100%"}
						h={"48px"}
						fontWeight={"700"}
						// borderRadius={"25px"}
						gap={"10px"}
						color={"black"}
						// border={"1px solid #A5A5A5"}
						bgColor={"white"}
					>
						Don't have an account?
					</Center>
					<Center
						w={"100%"}
						h={"48px"}
						fontWeight={"700"}
						borderRadius={"25px"}
						gap={"10px"}
						color={"blackAlpha.500"}
						border={"1px solid #A5A5A5"}
						bgColor={"white"}
					>
						<Center color={"black"}>
							CONTINUE WITH PHONE NUMBER
						</Center>
					</Center>
				</Center>
			</Center>
		</>
	);
}
