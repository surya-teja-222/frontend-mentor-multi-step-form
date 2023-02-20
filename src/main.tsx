import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./state/store";

// Start Point
import App from "./App";
// Global CSS
import "./util/css/style.css";
import Error from "./error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App id={1} />,
		errorElement: <App error={true} />,
	},
	{
		path: "/plan",
		element: <App id={2} />,
		errorElement: <App error={true} />,
	},
	{
		path: "/addons",
		element: <App id={3} />,
		errorElement: <App error={true} />,
	},
	{
		path: "/summary",
		element: <App id={4} />,
		errorElement: <App error={true} />,
	},
	{
		path: "*",
		element: <App id={1} />,
		errorElement: <App error={true} />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
