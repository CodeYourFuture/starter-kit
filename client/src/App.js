import { Route, Routes, Link, NavLink } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Marks from "./pages/Marks";

const App = () => (
	<div>
	<header>
		<nav>
			<h1>YIT</h1>
			<NavLink to="/">Home</NavLink>
			<NavLink to="about">About</NavLink>
			<NavLink to="marks">Marks</NavLink>
		</nav>
	</header>
	<main>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="about" element={<About />} />
		<Route path="marks" element={<Marks />} />
	</Routes>
	</main>
	</div>
);

export default App;
