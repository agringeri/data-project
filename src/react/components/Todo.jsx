import React from "react";
import moment from "moment";
import { ListGroup, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTimesCircle,
	faCheck,
	faUndo
} from "@fortawesome/free-solid-svg-icons";

const Todo = ({
	todo,
	isCompleted,
	added,
	completedOn,
	index,
	deleteTodo,
	completeTodo,
	undoTodo
}) => {
	return (
		<ListGroup.Item
			index={index}
			className={`todo-item ${isCompleted ? "completed" : ""}`}
			action
		>
			<span
				className="align-middle todo-name"
				style={{ textDecoration: isCompleted ? "line-through" : "" }}
			>
				{todo}
			</span>
			<span className="todo-controls float-right">
				{!isCompleted ? (
					<Badge variant="primary">
						added:{" "}
						{moment(added).format("ddd, MMM Do YYYY, h:mm A")}
					</Badge>
				) : (
					<Badge variant="secondary">
						completed:{" "}
						{moment(completedOn).format("ddd, MMM Do YYYY, h:mm A")}
					</Badge>
				)}
				{!isCompleted ? (
					<i onClick={() => completeTodo(index)}>
						<FontAwesomeIcon
							className="completeIcon"
							icon={faCheck}
						/>
					</i>
				) : (
					<i onClick={() => undoTodo(index)}>
						<FontAwesomeIcon className="undoIcon" icon={faUndo} />
					</i>
				)}
				<i onClick={() => deleteTodo(index)}>
					<FontAwesomeIcon
						className="deleteIcon"
						icon={faTimesCircle}
					/>
				</i>
			</span>
		</ListGroup.Item>
	);
};

export default Todo;
