import React, { Component } from "react";
import { Row, Grid, Col } from 'react-bootstrap';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: "William",
					username: "Ravelinx22",
					email: "asfasf",
					languages: ["Java"],
					image_url: "https://avatars3.githubusercontent.com/u/16025512?s=460&v=4"
				}
			]
		}
	}

	componentDidMount() {
	}

	render() {

		return(
			<h1>Home</h1>
		);
	}
}