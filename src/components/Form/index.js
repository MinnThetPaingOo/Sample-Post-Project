import React, { useRef } from 'react'
import { useState } from 'react'
import './index.css'

export default function Form({addPost}) {
    let [status,setStatus]= useState("upcoming")
    // let [title,setTitle] = useState("")
    let title = useRef()
    let resetForm = (e)=> {
        // setTitle('')
        title.current.value=''
    }
    let post_upload = (e) =>{
        e.preventDefault()
        let post = {
            id : Math.floor(Math.random()*10000),
            title : title.current.value,
            status : status 
        }
        resetForm()
        addPost(post)

    }
    
  return (
    <form className='post-form' onSubmit={post_upload}>
        <h1>Create Post</h1>
        <div className='form-control'>
            <label htmlFor="">Title</label>
            <input type="text" ref={title}/>
        </div>
        <div className='form-control'>
            <label htmlFor="">Status {status}</label>
            <select value={status} onChange={(e)=>{setStatus(e.target.value)}}>
                <option value="dropped">Dropped</option>
                <option value="onging">Ongoing</option>
                <option value="upcoming">Upcoming</option>
            </select>
        </div>
        <div className='form-control'>
            <button type="submit">Post Now</button>
        </div> 
    </form>
  )
}
