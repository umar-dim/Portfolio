import React from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "~/context/authContext";

const Admin = () => {
	const { session, signOut } = useAuthContext();
	const navigate = useNavigate();
	const handleSignOut = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			await signOut();
			navigate("/");
		} catch (err) {
			console.error("Error signing out:", err);
		}
	};

	return (
		<div>
			<div>Admin</div>
			<button onClick={handleSignOut}>Sign out</button>
		</div>
	);
};

export default Admin;
