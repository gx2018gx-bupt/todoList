import React from 'react'
import { Button } from 'antd'
import '../../index.css'

const Footer = props => {
	const { todoList, allActionByTodo, clearDoneTodo } = props
	const doneCount = todoList.reduce(
		(pre, todo) => pre + (todo.check ? 1 : 0),
		0
	)
	const allCount = todoList.length
	return (
		<div className='todo-footer'>
			<label>
				<input
					type='checkbox'
					onChange={e => allActionByTodo(e.target.checked)}
					checked={doneCount === allCount && allCount !== 0 ? true : false}
				/>
			</label>
			<span>
				<span>done</span> / all{todoList.length || 0}todo
			</span>
			<Button type='primary' ghost onClick={() => clearDoneTodo()}>
				clear done list
			</Button>
		</div>
	)
}

export default Footer
