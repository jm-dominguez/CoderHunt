import React, { Component } from "react";
import Hammer from "react-hammerjs";
import Cards from "../util/Cards.jsx";

export default class NotFoundPage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return(
			<h1>404 Not Found</h1>
		);
	}
}
