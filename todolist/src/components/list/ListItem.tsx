import React, { useState } from 'react'
import { Button } from 'antd'
import '../../index.css'

const Item = props => {
	const { item, updateTodo, delTodo } = props
	// 是否展现删除键
	const [mouse, setMouse] = useState(false)
	// 处理鼠标的移入移除事件
	const handleMouse = mouse => {
		setMouse(mouse)
	}
	return (
		<li
			onMouseLeave={() => handleMouse(false)}
			onMouseEnter={() => handleMouse(true)}
		>
			<label>
				<input
					type='checkbox'
					checked={item.check}
					onChange={e => updataTodo(item.id, e.target.checked)}
				/>
				<span>{item.name}</span>
			</label>
			<Button
				type='primary'
				size='small'
				danger
				ghost
				style={{ display: mouse ? 'block' : 'none' }}
				onClick={() => delTodo(item.id)}
			>
				删除
			</Button>
		</li>
	)
}
export default Item
