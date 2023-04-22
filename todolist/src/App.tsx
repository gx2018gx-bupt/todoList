import { useState } from 'react'
import './App.css'
import TodoHeader from './components/TodoHeader'
import ListBox from './components/ListBox'
import TodoFooter from './components/TodoFooter'

interface TodoItem {
	id?: string
	name: string
	check: boolean
}

function App() {
	const todoListData: TodoItem[] = [
		{ id: '0', name: '0-todo', check: true },
		{ id: '1', name: '1-todo', check: false },
		{ id: '2', name: '2-todo', check: true },
		{ id: '3', name: '3-todo', check: true },
	]

	const [todoList, setTodoList] = useState(todoListData)

	// add todo
	const addTodo = (todoItem: TodoItem) => {
		const newTodoList = [todoItem, ...todoList]
		setTodoList(newTodoList)
	}

	// update todo
	const updateTodo = (id: string, checkInfo: boolean) => {
		const newTodoList = todoList.map(item => {
			if (item.id === id) {
				return { ...item, check: checkInfo }
			} else {
				return item
			}
		})
		setTodoList(newTodoList)
	}

	// delete todo
	const deleteTodo = (id: string) => {
		const newTodoList = todoList.filter(item => {
			return item.id !== id
		})
		setTodoList(newTodoList)
	}

	// all todo action
	const allActionByTodo = (checkInfo: boolean) => {
		const newTodoList = todoList.map(item => {
			return { ...item, check: checkInfo }
		})
		setTodoList(newTodoList)
	}

	// clear done todo
	const clearDoneTodo = () => {
		const newTodoList = todoList.filter(item => {
			return !item.check
		})
		setTodoList(newTodoList)
	}

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '25px',
			}}
		>
			<div className='todo-wrap'>
				<TodoHeader addTodo={addTodo} />
				<ListBox
					todoList={todoList}
					updateTodo={updateTodo}
					deleteTodo={deleteTodo}
				/>
				<TodoFooter
					todoList={todoList}
					allActionByTodo={allActionByTodo}
					clearDoneTodo={clearDoneTodo}
				/>
			</div>
		</div>
	)
}
export default App
