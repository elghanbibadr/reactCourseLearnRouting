import React from 'react'
import { Link } from 'react-router-dom'
const MainHeader = () => {
  return (
    <header className='header'>
        <nav>
            <ul>
             <li>
                 <Link to='/welcome'>welcome</Link> 
                 </li> 
                <li>
                <Link to='/products'>products</Link> 
                </li>
            </ul>
        </nav>
       </header>
  )
}

export default MainHeader