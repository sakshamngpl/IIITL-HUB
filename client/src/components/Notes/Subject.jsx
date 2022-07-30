import React from 'react'
import { useParams } from 'react-router-dom'

const Subject = () => {
  const { sem_num, subject } = useParams();

  const onChange = (e) => {
    console.log(e)

  }
  return (
    <div>

      <div>{sem_num + " " + subject}</div>
      <input type="file" name="file" id="file" onChange={(e) => {onChange(e)}} />
    </div>
  )
}

export default Subject