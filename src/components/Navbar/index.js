import React from 'react'
import './index.css'

export default function Navbar({setshowModal}) {
  return (
    <nav className='navbar'>
    <div className="container">
      <h1>Logo</h1>
      <ul>
        <li>Home</li>
        <li>Posts</li>
        <li><button onClick={()=>setshowModal(true)}>Create Post</button></li>
      </ul>
    </div>
 </nav>
  )
}
