import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { getAuth, signInAnonymously } from "firebase/auth";

import './styles/index.css'

import Header from './components/Header'
import TopPage from './pages/TopPage'
import ThreadPage from './pages/ThreadPage'
import NotFoundPage from './pages/NotFoundPage'
import Footer from './components/Footer'

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    console.log('hello')
  })
  .catch((error) => {
    console.log(`code: ${error.code}, message] ${error.message}`)
  });

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Header/>

      <Routes>
        <Route path='/' element={<TopPage/>}/>
        <Route path='/threads/:threadId' element={<ThreadPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  </React.StrictMode>
)