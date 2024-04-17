import React from 'react'
import './index.css'
import ReactDom from 'react-dom'

export default function Modal({children,danger=false,setshowModal}) {
  let classNmae= danger? 'border-red' : 'border-green'
  return (
    ReactDom.createPortal(
        <div className='modal-component'>
          <div className='modal-backdrop'>
            <div className={`modal ${classNmae}`}>
            {children}
            <button onClick={()=>setshowModal(false)}>Close</button>
            </div>
          </div>
        </div>,
    document.getElementById(`modal`)
    )
  )
}
