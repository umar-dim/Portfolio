import React from "react";
import { useNavigate } from "react-router";
import { supabase } from "~/services/supabaseService";

const Admin = () => {
	// const { session, signOut } = UserAuth();
	const navigate = useNavigate();
	const handleSignOut = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const { error } = await supabase.auth.signOut();
			if (error) {
				throw error;
			}
			navigate("/");
		} catch (err) {
			console.error("Error signing out:", err);
		}
	};
	// console.log(session);

	return (
		<div>
			<div>Admin</div>
			<button onClick={handleSignOut}>Sign out</button>
		</div>
	);
};

export default Admin;
