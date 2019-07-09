import React, { useState, useEffect } from "react";
import Todo from "./react/components/Todo";
import TodoForm from "./react/components/TodoForm";
import NavigationBar from "./react/components/NavigationBar";
import { ListGroup } from "react-bootstrap";
import moment from "moment";
import "./styles/Todo.scss";

const App = () => {
	const initialState = JSON.parse(window.localStorage.getItem("todos"));

	const [todos, setTodos] = useState(initialState);

	useEffect(() => {
		// save state to localStorage
		window.localStorage.setItem("todos", JSON.stringify(todos));
	});

	const addTodo = text => {
		const newTodos = [
			{ text: text, isCompleted: false, added: moment() },
			...todos
		];
		setTodos(newTodos);
	};

	const deleteTodo = index => {
		const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
		setTodos(newTodos);
	};

	const completeTodo = index => {
		const newTodos = [
			...todos.slice(0, index),
			Object.assign({}, todos[index], {
				isCompleted: true,
				completedOn: moment()
			}),
			...todos.slice(index + 1)
		];
		setTodos(newTodos);
	};

	const undoTodo = index => {
		const newTodos = [
			...todos.slice(0, index),
			Object.assign({}, todos[index], {
				isCompleted: false,
				completedOn: ""
			}),
			...todos.slice(index + 1)
		];
		setTodos(newTodos);
	};

	const filterTodos = (todos, status) =>
		todos.filter(todo => todo.isCompleted === status);

	return (
		<div>
			<div className="container">
				<h1 className="mt-3">Todo List</h1>
				<TodoForm addTodo={addTodo} />
				<div className="mt-3">
					{todos.filter(todo => todo.isCompleted === false).length >
					0 ? (
						<h2>In Progress</h2>
					) : null}
					<ListGroup>
						{todos
							.filter(todo => todo.isCompleted === false)
							.map((todo, idx) => (
								<Todo
									key={idx}
									index={idx}
									todo={todo.text}
									isCompleted={todo.isCompleted}
									completedOn={todo.completedOn}
									added={todo.added}
									deleteTodo={deleteTodo}
									completeTodo={completeTodo}
									undoTodo={undoTodo}
								/>
							))}
					</ListGroup>
				</div>
				<div className="mt-3">
					{todos.filter(todo => todo.isCompleted === true).length >
					0 ? (
						<h2>Completed</h2>
					) : null}
					<ListGroup>
						{todos
							.filter(todo => todo.isCompleted === true)
							.map((todo, idx) => (
								<Todo
									key={idx}
									index={idx}
									todo={todo.text}
									isCompleted={todo.isCompleted}
									completedOn={todo.completedOn}
									added={todo.added}
									deleteTodo={deleteTodo}
									completeTodo={completeTodo}
									undoTodo={undoTodo}
								/>
							))}
					</ListGroup>
				</div>
			</div>
		</div>
	);
};

export default App;
