import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Jejda... </h2>      
      <p>Tato stránka nebyla nalezena 😢</p>
      <br/>
      <Link to='/'>Zpátky domů</Link>
    </div>
  )
}

export default NotFound
