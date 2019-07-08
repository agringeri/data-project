import React, { useState } from "react";
import { InputGroup, Button, Form, FormControl } from "react-bootstrap";

const TodoForm = ({ addTodo }) => {
	const [value, setValue] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		console.log(value);
		addTodo(value);
		setValue("");
	};

	return (
		<Form onSubmit={handleSubmit} className="my-3">
			<InputGroup>
				<FormControl
					type="text"
					className="form-control"
					value={value}
					onChange={e => setValue(e.target.value)}
					placeholder="Enter a todo..."
				></FormControl>
				<InputGroup.Append>
					<Button type="submit">Add Todo</Button>
				</InputGroup.Append>
			</InputGroup>
		</Form>
	);
};

export default TodoForm;
