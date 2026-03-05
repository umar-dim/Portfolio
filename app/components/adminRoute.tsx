
import { Navigate } from "react-router";
import { useAuthContext } from "~/context/authContext";
// import { UserAuth } from "./context/authContext";

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { session } = useAuthContext();

	if (session === undefined) {
		return <div>Loading...</div>;
	}

	return <div>{session ? <>{children}</> : <Navigate to="/signin" />}</div>;
};

export default AdminRoute;
