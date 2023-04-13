import axios from "axios";

export function userLogin(account) {
	return async function (dispatch) {
		try {
			const userData = await axios;

			await axios
				.get("http://localhost:2000/user", {
					params: {
						email: account.email.toLowerCase(),
						password: account.password,
					},
				})
				.then((res) => res.data[0]);
			dispatch({
				type: auth_types.login,
				payload: res.data[0],
			});
			localStorage.setItem("user", JSON.stringify(userData));
			return true;
		} catch (err) {
			console.log(err);
			return false;
		}
	};
}
