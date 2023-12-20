import React, {useState} from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import hogs from "../porkers_data";
import HogDetails from "./HogDetails";

function App() {
	const [hogState, setHogState] = useState({})
	const [greasedState, setGreasedState] = useState(false)

	return (
		<div className="App">
			<Nav greasedState={greasedState}
			setGreasedState={setGreasedState} />
			<Tile 
			hogs={hogs} 
			setHogState={setHogState}
			greasedState={greasedState}
			setGreasedState={setGreasedState} />
			<HogDetails hogState={hogState} />
		</div>
	);
}

export default App;
