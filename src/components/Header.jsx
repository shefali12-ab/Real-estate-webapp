import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1>
            <Link to='/'>
            <span>Shefali</span>
            <span>Estate</span>
            </Link>
            
        </h1>
        <form>
        <input type="text" placeholder='search..'/>
        </form>
      <ul className='flex gap-4'>
        <Link to='/'>
        <li>Home</li>
        </Link>
        <Link  to='/about'>
        <li>About</li>
        </Link>
         <Link to='/sign-in'>
         <li>SignIn</li>
         </Link>
       
      </ul>
        </div>
       
    </header>
  )
}

export default Header