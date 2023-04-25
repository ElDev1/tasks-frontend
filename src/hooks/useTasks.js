import { useState } from 'react'
import { getData } from '../services/getData'

export const useTasks = () => {
  const [tasks, setTasks] = useState([])

  console.log(getData)
  getData().then(data => setTasks(data))

  return { tasks }
}
