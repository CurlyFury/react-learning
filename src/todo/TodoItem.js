
import React, { useContext } from "react"

import Context from "../context"

const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '.5rem 1rem',
		border: '2px solid #ccc',
		borderRadius: '5px',
		margin: '5px'
	},
	span: {
		margin: '5px'
	},
	input: {
		marginRight: '1rem',
		cursor: 'pointer'
	}
}


function TodoItem({ todo, index, onChange }) {
	const { removeTodo } = useContext(Context)
	const classes = []

	if (todo.completed) {
		classes.push('isDone')
	}

	return (
		<li style={styles.li}>
			<span className={classes.join(' ')}>
				<input
					checked={todo.completed}
					style={styles.input}
					type="checkbox"
					onChange={() => onChange(todo.id)} />
				<strong>{index + 1 + '.'}</strong>
				<span style={styles.span}>{todo.title}</span>
			</span>
			<button className="btn" onClick={() => removeTodo(todo.id)}>&times;</button>
		</li>
	)
}

export default TodoItem