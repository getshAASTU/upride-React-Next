import React from 'react'
import { links } from '@/constants/datas'
import './navbar.css'
const Navbar = () => {
  return (
    <nav>
      {links.map((link)=>(
        <li>{link}</li>
      ))}
    </nav>
  )
}

export default Navbar