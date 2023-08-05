import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";
export function Home() {

	const githubLoginUrl = "https://github.com/login/oauth/authorize";
	const client_id = process.env.CLIENT_ID;
    const redirect_uri = process.env.REDIRECT_URI;
    const state = process.env.CLIENT_KEY;
    const url = `${githubLoginUrl}?client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`;

return (
	<main role="main">
		<div>
			<Navbar />
			<Link to={url}>GitHub login:</Link>
		</div>
	</main>
);
}
export default Home;

