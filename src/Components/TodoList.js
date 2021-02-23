import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddTask from './AddTask'
import ListTask from './ListTask'

const TodoList = () => {
    const taskList = useSelector(state => state)
    const [filter, setFilter] = useState(false)
    const handleFilter=()=>{
        setFilter(!filter)

    }
    return (
        <div>
           <AddTask handleFilter={handleFilter} filter={filter} /> 
           <ListTask taskList={filter?taskList.filter(el=>el.isDone):taskList} />
        </div>
    )
}

export default TodoList;
