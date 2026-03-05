import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "../services/supabaseService";

type AuthContextType = {
	session: Session | null;
	signInUser: (email: string, password: string) => Promise<{ data: any; error: any }>;
	signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({
	children,
}: {
	children: ReactNode;
}): React.ReactElement => {
	const [session, setSession] = useState<Session | null>(null);

	const signInUser = async (email: string, password: string) => {
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: email.toLowerCase(),
				password: password,
			});

			// console.log("Sign-in success:", data);
			return {data: data, error: error};
		} catch (error) {
			console.error("Unexpected error during sign-in:", error instanceof Error ? error.message : "Unknown error");
			return { data: null, error: error };
		}
	};

	useEffect(() => {
		supabase.auth
			.getSession()
			.then(({ data: { session } }: { data: { session: Session | null } }) => {
				setSession(session);
			});

		supabase.auth.onAuthStateChange(
			(_event: string, session: Session | null) => {
				setSession(session);
			}
		);
	}, []);

	const signOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error("Error signing out:", error);
		}
		setSession(null);
	};

	return (
		<AuthContext.Provider value={{ session, signInUser,  signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthContextProvider");
	}
	return context;
};
