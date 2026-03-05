import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("projects", "routes/projects.tsx"),
	route("projects/:projectId", "routes/project.tsx"),
	route("resume", "routes/resume.tsx"),
	route("admin", "routes/admin.tsx"),
	route("signin", "routes/signIn.tsx"),
] satisfies RouteConfig;
