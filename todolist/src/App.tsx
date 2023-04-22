import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import List from './components/list/List'
import Footer from './components/footer/Footer'

function App() {
	const todoListData = [
		{ id: '0', name: '0-todo', check: true },
		{ id: '1', name: '1-todo', check: false },
		{ id: '2', name: '2-todo', check: true },
		{ id: '3', name: '3-todo', check: true },
	]

	const [todoList, setTodoList] = useState(todoListData)

	// 添加todo
	const addTodo = todoObj => {
		const newTodos = [todoObj, ...todoList]
		setTodoList(newTodos)
	}

	// 更新todolist
	const updateTodo = (id, check) => {
		const newTodos = todoList.map(item => {
			if (item.id === id) {
				return { ...item, check: check }
			} else {
				return item
			}
		})
		setTodoList(newTodos)
	}

	// 删除某项todolist
	const delTodo = id => {
		const newTodos = todoList.filter(item => {
			return item.id !== id
		})
		setTodoList(newTodos)
	}

	// 全选/全不选
	const allChecked = check => {
		const newTodos = todoList.map(item => {
			return { ...item, check: check }
		})
		setTodoList(newTodos)
	}

	// 清除所以已经完成的任务
	const clearAllDone = () => {
		const newTodos = todoList.filter(item => {
			return !item.check
		})
		setTodoList(newTodos)
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
				<Header addTodo={addTodo} />
				<List todoList={todoList} updateTodo={updateTodo} delTodo={delTodo} />
				<Footer
					todoList={todoList}
					allChecked={allChecked}
					clearAllDone={clearAllDone}
				/>
			</div>
		</div>
	)
}
export default App
