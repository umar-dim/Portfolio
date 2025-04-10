import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { supabase } from "~/services/supabaseService";

const Signin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);

	// const { signInUser } = UserAuth();
	const navigate = useNavigate();

	const handleSignIn = async (e: React.FormEvent) => {
		e.preventDefault();
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email.toLowerCase(),
			password: password,
		});

		if (error) {
			setError(error.message); // Set the error message if sign-in fails

			// Set a timeout to clear the error message after a specific duration (e.g., 3 seconds)
			setTimeout(() => {
				setError("");
			}, 3000); // 3000 milliseconds = 3 seconds
		} else {
			// Redirect or perform any necessary actions after successful sign-in
			navigate("/admin");
		}

		if (data.session) {
			// console.log("Session data:", data.session);
			setError(""); // Reset the error when there's a session
		}
	};

	return (
		<div>
			<form onSubmit={handleSignIn} className="max-w-md m-auto pt-24">
				<h2 className="font-bold pb-2">Sign in</h2>
				<div className="flex flex-col py-4">
					{/* <label htmlFor="Email">Email</label> */}
					<input
						onChange={(e) => setEmail(e.target.value)}
						className="p-3 mt-2"
						type="email"
						name="email"
						id="email"
						placeholder="Email"
					/>
				</div>
				<div className="flex flex-col py-4">
					{/* <label htmlFor="Password">Password</label> */}
					<input
						onChange={(e) => setPassword(e.target.value)}
						className="p-3 mt-2"
						type="password"
						name="password"
						id="password"
						placeholder="Password"
					/>
				</div>
				<button className="w-full mt-4">Sign In</button>
				{error && <p className="text-red-600 text-center pt-4">{error}</p>}
			</form>
		</div>
	);
};

export default Signin;
