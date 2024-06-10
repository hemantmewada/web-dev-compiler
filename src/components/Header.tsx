import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className='w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center'>
      <div>
        <h2 className='font-bold uppercase'><Link to="/">Web Dev Compiler</Link></h2>
      </div>
      <div>
        <ul className='flex gap-2'>
          <li><Link to="/compiler"><Button variant="secondary">Compiler</Button></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header