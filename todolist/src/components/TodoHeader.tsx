import React from 'react'
import { message } from 'antd'
import '../../index.css'

const Header = props => {
	const { addTodo } = props

	// 处理input enter事件
	const handleKeyUp = e => {
		if (e.keyCode !== 13) return
		if (e.target.value.trim() === '') {
			return message.warning('请输入todo信息')
		}
		const todoObj = {
			id: Math.floor(10000000 * Math.random()),
			name: e.target.value,
			check: false,
		}
		addTodo(todoObj)
		e.target.value = ''
	}
	return (
		<div className='todo-header'>
			<input
				type='text'
				placeholder='请输入todo名称，按回车键确认'
				onKeyUp={e => handleKeyUp(e)}
			/>
		</div>
	)
}
export default Header
