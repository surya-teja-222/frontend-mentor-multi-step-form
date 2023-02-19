import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./state/store";

// Start Point
import App from "./App";
// Global CSS
import "./util/css/style.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App id={1} />,
	},
	{
		path: "/plan",
		element: <App id={2} />,
	},
	{
		path: "/addons",
		element: <App id={3} />,
	},
	{
		path: "/summary",
		element: <App id={4} />,
	},
	{
		path: "*",
		element: <App id={1} />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
