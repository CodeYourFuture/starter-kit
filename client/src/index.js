import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "/Users/admin/Desktop/Newsletter-Signup/CodeCrafters-YIT/client/src/index.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
