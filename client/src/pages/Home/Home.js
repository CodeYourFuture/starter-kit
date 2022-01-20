import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import logo from "../logo.svg";
import AboutUs from "./AboutUs/AboutUs";
import Welcome from "./Welcome/Welcome";
import WhatWeDo from "./WhatWeDo/WhatWeDo";

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<div> 
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Just the React logo"
					
				/>
				{/* <h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link> */}
				<Welcome/>
				<AboutUs/>
				<WhatWeDo/>
			</div>
		</main>
	);
}

export default Home;
