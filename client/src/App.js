import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import { startVisit } from "./services/visitService";

const App = () => {
	const [visit, setVisit] = useState();

	useEffect(() => {
		startVisit().then(setVisit);
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Home visit={visit} />} />
			<Route path="/about/this/site" element={<About />} />
		</Routes>
	);
};

export default App;
