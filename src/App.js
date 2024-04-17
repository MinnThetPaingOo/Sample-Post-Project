import React from 'react'
import { useState } from 'react';
import Navbar from './components/Navbar/index'
import PostLists from './components/PostLists/index';
import Form from './components/Form/index';
import Modal from './components/Modal/index';

export default function App() {
let[showModal,setshowModal] = useState(false)
let [posts,setPosts] = useState([
  {
    id : 1,
    title: 'First Post',
    status: 'upcoming'
  },
  {
    id : 2,
    title: 'Second Post',
    status: 'dropped'
  },
]) 
let addPost = (post) =>{
  setPosts((prevState)=>[...prevState,post])
  setshowModal(false)
}
  return (
    <>
    <Navbar setshowModal={setshowModal}/>
    <PostLists posts={posts}/>
    {/* <Modal>
            <h1>Zoom class is available now</h1>
            <p>Feel free to <a href="">join here</a></p>
    </Modal> */}
    {showModal &&
      <Modal danger setshowModal={setshowModal}>
        <Form addPost={addPost}/>
      </Modal>
    }
    
    </>
  )
}

