import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { GeneralInformation } from "./pages/GeneralInformation";
import { GeneralInformationForThePeriod } from "./pages/GeneralInformationForThePeriod";
import { GeneralInformationForThePeriodCountri } from "./pages/GeneralInformationForThePeriodСountry";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import "./Style.scss";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<nav className="NavBar">
					<NavLink to="/*">Main</NavLink>
					<NavLink to="/date">Date</NavLink>
					<NavLink to="/country">Country</NavLink>
				</nav>

				<Routes>
					<Route path="/*" element={<GeneralInformation />} />
					<Route
						path="/date"
						element={<GeneralInformationForThePeriod />}
					/>
					<Route
						path="/country"
						element={<GeneralInformationForThePeriodCountri />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
