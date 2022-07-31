import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Semester = () => {
  const { sem_num } = useParams();
  console.log(sem_num)
  return (
    <div className='container'>
      <div>Welcome to {sem_num}</div>
      <Link to={`${sem_num}/oops`}>OOPS</Link>
    </div>
  )
}

export default Semester