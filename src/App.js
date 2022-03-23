import HeroFooter from "./components/HeroFooter/HeroFooter";
import { BrowserRouter, Switch } from "react-router-dom";
import React from "react";

import "./App.css";

class App extends React.Component {
	state = {
		data: null,
		itemdata: null,
	};

	onChangeHandler = (data) => {
		this.setState({
			data: data,
		});
	};

	onChangeHandlerItem = (data) => {
		this.setState({
			itemdata: data,
		});
	};

	render() {
		return (
			<BrowserRouter>
				<Switch></Switch>
				<HeroFooter />
			</BrowserRouter>
		);
	}
}

export default App;
