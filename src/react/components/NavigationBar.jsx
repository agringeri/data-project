import React from "react";
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button
} from "react-bootstrap";

const NavigationBar = props => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand>Todo List</Navbar.Brand>
		</Navbar>
	);
};

export default NavigationBar;
