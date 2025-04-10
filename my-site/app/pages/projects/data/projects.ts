export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  dateCompleted: string;
  motivation: string;
  learnings: string[];
}

export const projects: Project[] = [
	{
		id: "portfolio",
		name: "Portfolio Website 🌟",
		description:
			"A personal portfolio website to showcase my projects and skills",
		technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
		githubLink: "https://github.com/umar-dim/Portfolio",
		liveLink: "https://your-portfolio-url.com",
		dateCompleted: "March 2025",
		motivation:
			"I wanted to create a modern, responsive portfolio website to showcase my work and skills while learning new technologies.",
		learnings: [
			"Implemented authentication using Supabase",
			"Learned how to create responsive layouts with Tailwind CSS",
			"Improved TypeScript skills with React",
			"Gained experience with React Router and server-side rendering",
		],
	},
	{
		id: "evently",
		name: "Evently 🎫",
		description:
			"A modern event management system for UIC campus events with QR code check-in functionality.",
		technologies: [
			"React",
			"Tailwind CSS",
			"Express.js",
			"MongoDB",
			"TypeScript",
			"JavaScript",
		],
		githubLink: "https://github.com/umar-dim/EVENTLY",
		dateCompleted: "August 2024",
		motivation:
			"This project was developed to streamline event management at UIC and improve event attendance tracking with real-time QR code check-ins.",
		learnings: [
			"Implemented real-time event updates by scraping UIC's website",
			"Developed a mobile-friendly UI with React and Tailwind CSS",
			"Integrated Google OAuth for authentication",
			"Built an admin dashboard for event management and QR code generation",
			"Used MongoDB for event and user data storage",
			"Developed QR code scanning functionality for check-ins using the camera",
		],
	},
	{
		id: "smart-grocery-app",
		name: "Smart Grocery 🛒",
		description:
			"A cross-platform mobile application built with Flutter that helps users manage their grocery shopping, discover recipes, and get personalized recommendations.",
		technologies: ["Flutter", "SQLite", "Machine Learning", "Git", "Jira"],
		githubLink: "https://github.com/umar-dim/Smart-Grocery",
		dateCompleted: "April 2024",
		motivation:
			"Created to simplify grocery shopping and enhance user experience with intelligent recipe and product suggestions.",
		learnings: [
			"Built a responsive cross-platform UI using Flutter",
			"Implemented secure authentication with hashed passwords and SQLite database integration",
			"Integrated 1000+ recipes with search and filtering capabilities",
			"Developed a machine learning-powered recommendation system",
			"Used Git for version control and Jira for agile task management",
			"Improved user engagement by 35% and recipe conversions by 25%",
		],
	},
	{
		id: "moodcanvas",
		name: "MoodCanvas 🎨",
		description:
			"A mindful tech mobile application built with Flutter for Sparkhacks 2024 that promotes mental wellness through journaling, habit tracking, and mood monitoring.",
		technologies: ["Flutter", "Dart", "Material Design"],
		githubLink: "https://github.com/mkatra3/MoodCanvas",
		dateCompleted: "October 2024",
		motivation:
			"Built during UIC Sparkhacks 2024 (Track 1: Mindful Tech) to promote mental wellness and self-awareness through a user-friendly mobile experience.",
		learnings: [
			"Designed and implemented a comprehensive mental health dashboard",
			"Integrated mood tracking, journaling (text + image), and habit monitoring features",
			"Built calendar and timeline views to visualize progress over time",
			"Created visual graphs for mood and habit trends",
			"Curated a wellness content feed with personalized recommendations",
			"Integrated UIC mental health resources for accessibility",
		],
	},
	{
		id: "nostalgia-threads",
		name: "Nostalgia Threads 🧠",
		description:
			"A community-driven platform where users share cultural memories through short 'memory cards', fostering connection and comfort through shared experiences and nostalgia.",
		technologies: ["React", "TypeScript", "Django", "Python"],
		githubLink: "https://github.com/umar-dim/Nostalgia-Threads",
		dateCompleted: "April 2025",
		motivation:
			"Created to build a space where people can connect through shared cultural experiences and preserve personal memories in a meaningful, community-driven way.",
		learnings: [
			"Developed a full-stack application using React, TypeScript, Django, and Python",
			"Implemented user authentication and interactive UI components",
			"Built RESTful APIs in Django to manage memory card content",
			"Explored user-driven content and social interaction features",
			"Enhanced skills in collaborative development and community-focused design",
		],
	},
	{
		id: "real-estate-predictor",
		name: "Real Estate Investment Predictor 🏘️",
		description:
			"A machine learning-powered analysis of Chicago's real estate market using Zillow Home Value Index (ZHVI) data to identify high-potential investment opportunities across neighborhoods.",
		technologies: [
			"Python",
			"Jupyter Notebooks",
			"Pandas",
			"NumPy",
			"Matplotlib",
			"Seaborn",
		],
		githubLink: "https://github.com/umar-dim/Scientific-data-analysis",
		dateCompleted: "September 2024",
		motivation:
			"Created to assist real estate investors in making data-driven decisions by forecasting property values and analyzing neighborhood trends in Chicago.",
		learnings: [
			"Performed extensive data cleaning and preprocessing on historical ZHVI and demographic data",
			"Developed ML models to forecast future home values across Chicago neighborhoods",
			"Visualized trends in population density, property value, and neighborhood growth",
			"Identified East Side as a high-potential investment zone based on predictive insights",
			"Explored correlations between demographic features and property values",
			"Collaborated on a large-scale data project using Git and Jupyter for reproducibility",
		],
	},
	{
		id: "three-card-poker",
		name: "3-Card Poker Game 🎮",
		description:
			"A full-stack multiplayer 3-card poker game built with Java and JavaFX, featuring real-time networking, smooth gameplay, and a scalable MVC architecture.",
		technologies: ["Java", "JavaFX", "Maven", "Git", "MVC Pattern", "TCP/IP"],
		githubLink: "https://github.com/umar-dim/3-Card-Poker",
		dateCompleted: "April 2023",
		motivation:
			"Built to explore scalable game development with real-time multiplayer capabilities and robust UI design in Java.",
		learnings: [
			"Implemented real-time multiplayer networking using TCP/IP protocols",
			"Designed an intuitive JavaFX-based UI for immersive gameplay",
			"Used multi-threading to improve responsiveness by 30%",
			"Built a server-client architecture supporting concurrent game sessions",
			"Managed game state securely and efficiently",
			"Followed Agile methodology and CI/CD practices for streamlined development",
		],
	},
	{
		id: "level-game",
		name: "Level Game 🎮",
		description:
			"A dynamic adventure game built using Python and Turtle graphics where Mario collects coins while avoiding ghosts across multiple levels.",
		technologies: ["Python", "Turtle Graphics"],
		githubLink: "https://github.com/umar-dim/Level-Game",
		dateCompleted: "December 2021",
		motivation:
			"This was my first Python project, created to learn the fundamentals of programming through game development using Turtle graphics.",
		learnings: [
			"Learned basic Python syntax and control flow",
			"Built interactive game mechanics using Turtle graphics",
			"Implemented real-time character movement and enemy AI logic",
			"Used randomization to dynamically place coins and increase replayability",
			"Understood the principles of event-driven programming",
		],
	},

	// Add more projects as needed
];