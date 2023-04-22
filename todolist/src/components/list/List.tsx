import React from 'react'
import ListItem from './ListItem'
import '../../index.css'

export default function index(props) {
	const { todoList, ...restProps } = props
	return (
		<ul className='todo-main'>
			{todoList.map(item => (
				<ListItem item={item} key={item.id} {...restProps} />
			))}
		</ul>
	)
}
